import * as passportJwt from "passport-jwt";
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
import User from "../models/User";
import keys from "./keys";
// import interface
import { StrategyOptions } from "passport-jwt";

let opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKeyProvider: (req, rawJwtToken, done) => {
    console.log(req.headers);
    done(null, keys.secretOrKey + req.header("Fingerprint"));
  }
};

export default passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
