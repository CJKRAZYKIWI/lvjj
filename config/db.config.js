module.exports = {
    HOST: "ec2-52-73-184-24.compute-1.amazonaws.com",
    USER: "biadecvsqobsde",
    PASSWORD: "32ac053191875fef1f53b259e8e7312e81245c0a140a59c516e526ee458c4d69",
    DB: "d9mlp7mngiciai",
    dialect: "postgres",
    dialectOptions: {
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  