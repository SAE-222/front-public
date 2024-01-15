import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface HasId {
  id: number;
}

export interface ArrayStorageHook<T extends HasId> {
  values: T[];
  push: (item: T) => void;
  remove: (item: T) => void;
  toggle: (item: T) => void;
  clear: () => void;
  contains: (item: T) => boolean;
  replace: (item: T) => void;
}

export default function useArrayStorage<T extends HasId>(
  key: string,
): ArrayStorageHook<T> {
  const [values, setValues] = useState<T[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    if (localStorage === undefined) {
      return [];
    }
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage !== undefined) {
      localStorage.setItem(key, JSON.stringify(values));
    }
  }, [key, values]);

  useEffect(() => {
    if (status === "unauthenticated" && values.length > 0) {
      clear();
    }
  }, [status]);

  const replace = (item: T) => {
    if (status !== "authenticated") {
      router.push("/login");
      return;
    }
    setValues((prevArray: T[]) => {
      const index = prevArray.findIndex((x) => x.id === item.id);
      if (index === -1) {
        return [...prevArray, item];
      }
      return [
        ...prevArray.slice(0, index),
        item,
        ...prevArray.slice(index + 1),
      ];
    });
  };

  const push = (item: T) => {
    if (status !== "authenticated") {
      router.push("/login");
      return;
    }
    setValues((prevArray: T[]) => [...prevArray, item]);
  };

  const toggle = (item: T) => {
    if (contains(item)) {
      remove(item);
    } else {
      push(item);
    }
  };

  const remove = (item: T) => {
    if (status !== "authenticated") {
      router.push("/login");
      return;
    }
    setValues((prevArray: T[]) => prevArray.filter((x) => x.id !== item.id));
  };

  const clear = () => {
    setValues([]);
  };

  const contains = (item: T) => {
    return values.some((x) => x.id === item.id);
  };

  return {
    values,
    push,
    remove,
    toggle,
    clear,
    contains,
    replace,
  };
}
