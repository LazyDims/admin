import db from "@/lib/db";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div className="flex justify-center font-bold text-lg">
      <div className="p-30 mt-5">
        {store?.name}
      </div>
    </div>
  )
};

export default DashboardPage;
