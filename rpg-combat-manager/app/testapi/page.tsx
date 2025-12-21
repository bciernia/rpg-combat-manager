'use client';

import { TestData } from "@/features/test/test.types";
import { useEffect, useState } from "react";

const TestApi = () => {
    const [data, setData] = useState<TestData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

      useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
          const data = await fetch('/api/test');
          const response = await data.json();
          setData(response);
          setIsLoading(false);
        };
    
        try {
          getData();
        } catch(error ) {
          console.error("Error fetching data:", error);
        }
      }, []);

      if(isLoading) return (<div className="flex justify-center items-center">Loading...</div>)

      return (<div className="min-h-screen flex items-center flex-col">{data.map(item => <div key={item.id}><h1 className="m-2 text-4xl">{item.name}</h1></div>)}</div>)
}

export default TestApi;