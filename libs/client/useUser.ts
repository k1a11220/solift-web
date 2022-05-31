import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser(isExcept: boolean = false) {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  if (!isExcept) {
    useEffect(() => {
      if (data && !data.ok) {
        router.replace("/enter");
      }
    }, [data, router]);
  } else {
  }

  return { user: data?.profile, isLoading: !data && !error };
}
