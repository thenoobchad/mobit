import { logout } from "@/actions/auth";
import {
  getDatabaseUsers,
  getPackages,
  getTransactions,
} from "@/lib/databaseQueries";


import { UpdateStatus } from "./_components/update-status";

export default async function AdminPage() {
  const {  databaseUsers: allUsers } = await getDatabaseUsers();

  const notAdminUsers = allUsers.filter((user) => user.role != "admin");

  //Total number of users not admin
  const totalUsers = notAdminUsers.length;

  //Total wallet balance

  let totalBalance = 0;
  for (const user of allUsers) {
    if (user.wallet) {
      totalBalance += user.wallet;
    }
  }

  const totalPackages = (await getPackages()).length;

  //Total tranactions

  const allTransactions = await getTransactions();

  return (
    <section className="w-full p-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Overview Panel</h4>
      </div>

      <div className="grid-rols-4 grid w-full grid-cols-12 items-center gap-4 py-4">
        <div className="col-span-4 border-r border-zinc-500">
          <p>Total Users</p>
          <span>{totalUsers ?? "NULL"}</span>
        </div>
        <div className="col-span-4 border-r border-zinc-500">
          <p>Total balance</p>
          <span>$ {totalBalance}</span>
        </div>
        <div className="col-span-4">
          <p>Transactions</p>
          <span>65</span>
        </div>
        <div className="col-span-4 border-r border-zinc-500">
          <p>Plans</p>
          <span>{totalPackages}</span>
        </div>
        <div className="col-span-4 border-r border-zinc-500">
          <p>Verified Users</p>
          <span>56</span>
        </div>
        <div className="col-span-4">
          <p>Profit balance</p>
          <span>$ 27765</span>
        </div>
      </div>

      <div className="mt-8 font-semibold">Transactions</div>
      <table className="my-4 w-full">
        <thead>
          <tr>
            <td>TransID</td>
            <td>Amount</td>
            <td>Type</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {allTransactions.map((data) => (
            <tr key={data.id}>
              <td>tx{data.id.slice(0, 6)}</td>

              <td>$ {data.amount}</td>
              <td>{data.type}</td>
              <td>
                <UpdateStatus status={data.status} id={data.id} />
              </td>
              <td>{data.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
