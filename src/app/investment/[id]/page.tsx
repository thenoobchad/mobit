// import { db } from "@/db"
// import { packages } from "@/db/schema"
// import { getCurrentUserById } from "@/lib/currentUser"
// import { eq } from "drizzle-orm"
// import Link from "next/link"
// import { InvestBtn } from "../invest-btn"
// import { redirect } from "next/navigation"
// import { revalidatePath } from "next/cache"


// export default async function InvestmentPage({ params }: { params: { id: string } }) {

//     const { id } = await params
//   const [plan] = await db.select().from(packages).where(eq(packages.id, id))
  
//   let user = await getCurrentUserById();
//   if (!user) { 
    
//     revalidatePath("/")
//     redirect("/")
//   }
     
//   return (
//     <div className="w-full h-full flex flex-col">
//       <div>
//         <h4>The details of {plan.title}</h4>
//         <p>The plan offers a {plan.description} with a minimum investment of {plan.minInvestment}</p>
//         <p>Our Clients enjoy {plan.noteone}, {plan.notetwo}, {plan.notethree} and {plan.notefour}</p>
        
//       </div>
//       <div className="flex gap-4">
//         <InvestBtn user={user} plan={plan} />
//         <Link href="/">Cancel</Link>
//       </div>
//       </div>
//   )
// }
