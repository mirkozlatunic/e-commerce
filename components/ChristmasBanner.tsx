import { COUPON_CODES } from '@/sanity/lib/sales/couponCodes';
import { getActiveSaleByCouponCode } from '@/sanity/lib/sales/getActiveSaleByCouponCode';

const ChristmasBanner = async () => {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.XMAS2024);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-green-700 to-red-700 text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-2 text-4xl opacity-20">❄️</div>
        <div className="absolute top-8 right-12 text-4xl opacity-20">🎄</div>
        <div className="absolute bottom-4 left-16 text-4xl opacity-20">⭐</div>
        <div className="absolute bottom-8 right-8 text-4xl opacity-20">🎁</div>
      </div>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4 text-white">
            {sale.title}
          </h2>
          <p className="text-left text-xl sm:text-3xl font-semibold mb-6 text-green-100">
            {sale.description}
          </p>
          <div className="flex">
            <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300 border-2 border-red-200">
              <span className="font-bold text-base sm:text-xl">
                Use code:{' '}
                <span className="text-green-700">{sale.couponCode}</span>
              </span>
              <span className="ml-2 font-bold text-base sm:text-xl">
                for {sale.discountAmount}% OFF
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Snow effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-snowfall"
          style={{ left: '10%', animationDelay: '0s' }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-snowfall"
          style={{ left: '25%', animationDelay: '1s' }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-snowfall"
          style={{ left: '40%', animationDelay: '2s' }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-snowfall"
          style={{ left: '65%', animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-snowfall"
          style={{ left: '80%', animationDelay: '1.5s' }}
        ></div>
      </div>
    </div>
  );
};

export default ChristmasBanner;
