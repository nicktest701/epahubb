import Profile from "../components/Profile";

import PortalCard from "../components/PortalCard";
import PortalCard2 from "../components/PortalCard2";
import portal_img from "../assets/svg/sidebar/portal.svg";

import profit_na from "../assets/svg/profit_na.svg";
import withdrawal from "../assets/svg/withdrawal_state.svg";

function Statistics() {
  return (
    <div className="py-12 md:py-8">
      <Profile />

      <div className="flex justify-start items-center pb-12">
        <img src={portal_img} alt="" className="size-10 md:size-16" />
        <h2 className="text-xl md:text-3xl font-semibold pt-4">
          Affiliate Portal
        </h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
        <PortalCard
          bgcolor="bg-primary500"
          icon={withdrawal}
          footerText="Request Withdrawal"
        >
          <div className="flex justify-between items-center p-8 gap-8">
            <p className="text-2xl font-bold">0</p>
            <p className="w-1/2">Withdrawal State</p>
          </div>
        </PortalCard>
        <PortalCard bgcolor="bg-blue-400" icon={profit_na} footerText="N/A">
          <div className="flex justify-between items-center p-8 gap-8">
            <p className="text-2xl font-bold">$0.00</p>
            <p>Profit</p>
          </div>
        </PortalCard>
        <PortalCard2 />
      </div>

      <section className="p-8 bg-secondary500 mt-20">
        <div className=" rounded-md ">
          <h3 className="text-xl md:text-3xl py-8 pb-10 whitespace-nowrap">
            Payouts and Certificates
          </h3>

          <table className="w-full max-w-full block border-collapse overflow-x-auto ">
            <thead className="border-b border-opacity-20 border-gray-100 flex justify-between items-center ">
              <tr className="text-left whitespace-nowrap">
                <th className="font-normal">Date UTC</th>
                <th className="font-normal">Profit</th>
                <th className="font-normal">Simulated Gain Split</th>
                <th className="font-normal">Paid</th>
                <th className="font-normal">Status</th>
                <th className="font-normal">Certificate</th>
                <th className="font-normal">Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center whitespace-nowrap ">
                <td colSpan={7} className="py-8  ">
                  No data in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
