import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <img className="pitterpatter" src="/pitter_patter.gif" width="100%" height="auto" />

      <style jsx>{`
        .pitterpatter {
          display: block;
          margin: 24px auto;
        }
      `}</style>
    </Layout>
  );
}
