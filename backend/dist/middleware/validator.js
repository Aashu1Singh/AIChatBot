import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
            });
        }
        next();
    };
};
const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
        .trim()
        .isLength({ min: 5 })
        .withMessage("Passoword is required"),
];
const signupValidator = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export { signupValidator, loginValidator };
//# sourceMappingURL=validator.js.map