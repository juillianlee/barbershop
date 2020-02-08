const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');
const { ApolloServer } = require('apollo-server-koa');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

// carrega todos os schemas
const schemasArray = fileLoader(path.join(__dirname, './schemas/**/*.graphql'));
const typeDefs = mergeTypes(schemasArray);

// carrega todos os resolvers
const resolversArray = fileLoader(path.join(__dirname, './resolvers/**/*.js'));
const resolvers = mergeResolvers(resolversArray);

// cria o schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// cria uma instancia do apollo server
const server = new ApolloServer({ schema });

module.exports = server;
