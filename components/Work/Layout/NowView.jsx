"use client";
import { useGlobalContext } from "@contexts/WorkContext";
import { Card, CardBody } from "@nextui-org/react";

export default function NowView() {
  const { data } = useGlobalContext();
  return (
    <div className="flex-col hidden gap-2 px-4 pt-5 md:flex md:px-0 text-neutral-500">
      <h1 className="text-medium">Now Viewing</h1>
      <Card
        shadow="none"
        fullWidth
        radius="sm"
        className="p-0 min-h-28 bg-neutral-700"
      >
        <CardBody>
          <h1 className="text-large text-neutral-200">{data?.title}</h1>
          <p className="overflow-hidden text-sm text-neutral-400 line-clamp-3">
            {data?.description}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
