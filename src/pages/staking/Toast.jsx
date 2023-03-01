const Toast = ({ icon, title, price }) => {
  return (
    <div className="flex items-center h-[104px] bg-white">
      <div className="flex justify-between items-center gap-3 px-5">
        <div className=" flex justify-center items-center bg-skin-green rounded-[5px] w-12 h-12">
          <svg
            width="31"
            height="31"
            className="w-6 h-6 rounded-full"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.91488 24.37L8.92286 18.362L13.2698 22.7074L20.2934 15.6853L23.0485 18.4388V10.756H15.3657L18.1207 13.511L13.2698 18.362L8.92439 14.015L1.32453 21.6149C0.44858 19.6481 -0.00274692 17.5187 1.2578e-05 15.3657C1.2578e-05 6.87921 6.87922 0 15.3657 0C23.8521 0 30.7313 6.87921 30.7313 15.3657C30.7313 23.8521 23.8521 30.7313 15.3657 30.7313C12.9348 30.7329 10.5384 30.157 8.3737 29.051C6.20902 27.9451 4.33805 26.3406 2.91488 24.37Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <p className="text-base text-skin-muted">{title}</p>
          <h1 className="text-2xl">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default Toast;
