import fs from 'fs'
import path from 'path'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h2>
        Hello World
      </h2>
    </div>
  )
}

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)
  return {
    props: {
      posts: 'The Posts',
    },
  }
}
