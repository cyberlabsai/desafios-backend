// const { Schema, model} = require('mongoose');

// const DesenvolvedorSchema = new Schema({
//     name: {
//         type: String,
//         required: true, 
//     },
//     use: {
//         type: String, 
//         required: true,
//     },
//     bio: String,
//     avatar: {
//         type: String,
//         required: true,
//     },
// }, {
//     //createdAt e updateAt(Criar uma coluna para cada desenvolvedor para criar e atualizar)
//     timestamps: true,
// });

// module.exports =  model('Desenvolvedor', DesenvolvedorSchema);



const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
}, {
  timestamps: true,
});

module.exports = model('Dev', DevSchema);