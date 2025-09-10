import { getCurrentUserById } from "@/lib/currentUser";
import { getTransactions } from "@/lib/databaseQueries";


export default async function DashboardPage() {
  const user = await getCurrentUserById();

  const transactions = await getTransactions();

  const userTransactions = transactions.filter(
    (userTx) => userTx.userId === user?.id
  );
  console.log(userTransactions);
  return (
    <section className="w-full p-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Overview</h4>
        <p></p>
      </div>

      <div className="grid-rols-4 grid w-full grid-cols-12 items-center gap-4 py-4">
        <div className="col-span-4 border-r border-zinc-500">
          <p>Wallet balance</p>
          <span>$ {user?.wallet ?? "NULL"}</span>
        </div>
        <div className="col-span-4 border-r border-zinc-500">
          <p>Profit balance</p>
          <span>$ 234.00</span>
        </div>
        <div className="col-span-4">
          <p>Transactions</p>
          <span>{userTransactions.length}</span>
        </div>
      </div>

      <div className="mt-8 font-semibold">Transactions</div>
      <table className="my-4 w-full">
        <thead>
          <tr>
            <td>TransID</td>
            <td>Amount</td>
            <td>Mode</td>
            <td>Type</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {userTransactions.map((data) => (
            <tr key={data.id}>
              <td>tx{data.id.slice(0, 6)}</td>
              <td>$ {data.amount}</td>
              <td>{data.type}</td>
              <td>{data.status}</td>
              <td>{data.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
