import React, { useEffect, useState } from 'react';
import './Home.css';
import { axiosinstance } from '../../config/axiosintance';
import Blogcard from '../../Blogcards/Blogcard';


function Home() {
  const [blogData, setBlogData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 5; // Number of posts per page

  useEffect(() => {
    fetchBlogData(pageNo);
  }, [pageNo]);

  // Fetch paginated blog data from backend
  const fetchBlogData = () => {
    axiosinstance.get(`/posts/getBlogData?perPage=${perPage}&pageNo=${pageNo}`)
      .then((res) => {
        const [result] = res.data;
        setBlogData(result.blogs);
        const totalPosts = result.totalCount[0]?.totalCount || 0;
        setTotalPages(Math.ceil(totalPosts / perPage));
      })
      .catch((err) => {
        console.error('Error fetching blog data:', err);
      });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Recent Blog Posts</h1>
      </header>

      <section className="recent-posts">
        {blogData.map((blog) => (
          <Blogcard key={blog._id} data={blog} />
        ))}

        <div className="pagination">
          <button onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))} disabled={pageNo === 1}>
            Previous
          </button>
          <span>Page {pageNo} of {totalPages}</span>
          <button onClick={() => setPageNo((prev) => Math.min(prev + 1, totalPages))} disabled={pageNo === totalPages}>
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
