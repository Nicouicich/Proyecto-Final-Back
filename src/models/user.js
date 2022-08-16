import mongoose from "mongoose";

export const userCollectionName = "users";

const UsersSchema = new mongoose.Schema(
  {
    usuario: {type: String, requiere:true, unique:true},
    password: {type: String, requiere:true},
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    direccion: [
      {
        calle: { type: String, required: true },
        altura: { type: Number, required: true },
        cp: { type: Number, required: true },
        piso: { type: Number },
        departamento: { type: String },
      },
    ],
    email: { type: String, require: true },
    telefono: { type: Number, require: true },
    admin: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

UserSchema.pre('save', async function(next) {
  const user = this
  const hash = await bcrypt.hash(user.password,10)
  this.password = hash
  next()
})

UserSchema.methods.isValidPassword = async function (password) {
  const user = this
  const compare = await bcrypt.compare(password,user.password)
  return compare

}

export const UserModel = mongoose.model(userCollectionName, UsersSchema);
