import useToken from "./useToken";

const useRootHook = () => {
  const Token = useToken();

  return { Token };
};

export default useRootHook;
