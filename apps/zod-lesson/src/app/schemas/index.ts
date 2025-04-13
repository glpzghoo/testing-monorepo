import z from "zod";
export const LoginSchema = z.object({
  email: z.string().email({ message: "Емайлээ шалгана уу!" }),
  password: z
    .string()
    .min(3, { message: "Дор хаяж 3 оронтой нууц үг оруулна уу!" }),
});
