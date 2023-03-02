import Link from 'next/link';

const Tabs = () => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            All
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="#"
            className="inline-block p-4 text-skin-green border-b-2 border-skin-green rounded-t-lg   "
          >
            Available
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Completed
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
