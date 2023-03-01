import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { projects } from '@/data/data';
const SingleProduct = ({ project }) => {
  const router = useRouter();

  return <Layout></Layout>;
};

export default SingleProduct;
