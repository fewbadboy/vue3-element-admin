const req = require.context('./svg', false, /\.svg$/)
const importAll = requireContext => requireContext.keys().forEach(requireContext)
importAll(req)
