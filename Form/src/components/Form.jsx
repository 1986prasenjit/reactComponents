import { motion } from "framer-motion"; // fixed import

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center animate-gradient overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-transparent shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-sm rounded-2xl p-12 flex flex-col items-center max-w-sm w-full mx-4"
      >
        <h2 className="text-white text-2xl sm:text-4xl uppercase font-semibold bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
          <div className="relative mb-6">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
              required
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white text-base focus:outline-none focus:bg-white/20 transition placeholder:text-white"
            />
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white text-base focus:outline-none focus:bg-white/20 transition placeholder:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-all"
          >
            Log In
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginForm;
