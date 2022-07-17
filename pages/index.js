// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

// custom css
import styles from '../styles/Home.module.css'

import Script from "next/script";
import Head from "next/head";
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>the Basics</title>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></Script>

      <nav class="navbar sticky-top navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">the Basics</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link btn btn-primary text-white px-4 btn-sm" href="#join">Join Waitist</a>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.hero} id="join">
          <h1 className='mb-3 display-4'>the Basics by Sachin Sharma</h1>
          <p>a series of live cohort which intents to teach the very basics knowledges <br></br> which has very importance in succedding life.</p>

          <form class="row g-2 mt-4 justify-content-center" action="https://www.getrevue.co/profile/sachinsblog/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
            <div class="col-5">
              <input type="email" readonly class="form-control" placeholder='Your Email' name="member[email]" id="member_email" />
            </div>
            <div class="col-auto">
              <button type="submit"  class="btn btn-primary mb-3"  name="member[subscribe]" id="member_submit">Join Waitlist</button>
            </div>
          </form>

          <small className='text-muted'>Join the waitlist to get notified earlier. No Spam, Unsubscribe anytime!</small>
      </div>


      <div className='col-md-8 m-auto mb-4'>
        <h2 className='text-center mb-5'>Benefits</h2>
        <div className='row row-cols-md-3 row-cols-1 g-2'>
          <div className='col my-md-4'>
            <div className='card border-0'>
              <Image src='/live-course.svg' className="card-img-top"  width="70" height="160" />
              <h5 className='text-center card-title mt-3'> Live Interactive Sessions</h5>
            </div>
          </div>

          <div className='col'>
            <div className='card border-0'>
              <Image src='/resources.svg' className="card-img-top"  width="70" height="160" />
              <h5 className='text-center card-title mt-3'> Notes & Cheatsheets</h5>
            </div>
          </div>

          <div className='col'>
            <div className='card border-0'>
              <Image src='/community.svg' className="card-img-top"  width="70" height="160" />
              <h5 className='text-center card-title mt-3'> Private Discord Community</h5>
            </div>
          </div>

          <div className='col'>
            <div className='card border-0'>
              <Image src='/project.svg' className="card-img-top"  width="70" height="160" />
              <h5 className='text-center card-title mt-3'> Project Building</h5>
            </div>
          </div>

        
        </div>
      </div>


      <div className='py-5  mb-5'>
        
        <div className='col-md-7 m-auto'>
          <h2 className='text-center mb-4'>FAQ</h2>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is the basics?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  How to Join?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  What is the duration?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>
          
        </div>

      </div>


      <div className='text-center bg-light py-4'>
        <p>Build with love by Sachin | <a href='#'>Privacy Policy</a></p>  
      </div>

    </>
  )
}
