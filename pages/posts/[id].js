import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../..compoennts/date'


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
            <title>{postData.title}</title>
            </Head>
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}



export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
        }
    }


export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    // Return a list of possible value for id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
// Reynir is still gay