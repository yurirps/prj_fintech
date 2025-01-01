import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    // Ref para armazenar as opções da requisição e evitar re-renderizações desnecessárias
    const optionsRef = React.useRef(options);
    optionsRef.current = options;

    React.useEffect(() => {
        const controller = new AbortController(); // Controlador para cancelar a requisição
        const { signal } = controller;

        const fetchData = async () => {
            setLoading(true);
            setData(null);
            try {
                const response = await fetch(url, {
                    signal,
                    ...optionsRef.current,
                });
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const json = (await response.json()) as T;
                if (!signal.aborted) setData(json);
            } catch (error) {
                if (!signal.aborted && error instanceof Error) setError(error.message);
                console.log(error);
            } finally {
                if (!signal.aborted) setLoading(false);
            }
        };

        fetchData();

        // Cleanup para cancelar a requisição ao desmontar o componente ou mudar a URL
        return () => {
            controller.abort();
        };
    }, [url]);


    return { data, loading, error };
}

export default useFetch;