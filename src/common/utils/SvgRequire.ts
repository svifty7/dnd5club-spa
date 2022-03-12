const req = require.context('@/assets/icons/svg', false, /\.svg$/);

function requireAll(requireContext: __WebpackModuleApi.RequireContext) {
    return requireContext
        .keys()
        .map(requireContext);
}

requireAll(req);
