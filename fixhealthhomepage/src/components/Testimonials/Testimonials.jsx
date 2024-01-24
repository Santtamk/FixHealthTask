const testimonialsData = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      qualityOfService: 'Excellent',
      name: 'John Doe',
      age: 35,
      profession: 'Software Engineer',
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      qualityOfService: 'Outstanding',
      name: 'Jane Smith',
      age: 28,
      profession: 'Graphic Designer',
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      qualityOfService: 'Very Good',
      name: 'Bob Johnson',
      age: 40,
      profession: 'Accountant',
    },
    {
      id: 4,
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      qualityOfService: 'Satisfactory',
      name: 'Emily Brown',
      age: 32,
      profession: 'Marketing Specialist',
    },
    {
      id: 5,
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      qualityOfService: 'Good',
      name: 'Michael Wilson',
      age: 45,
      profession: 'Teacher',
    },
    {
      id: 6,
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      qualityOfService: 'Excellent',
      name: 'Sophia Davis',
      age: 30,
      profession: 'Nurse',
    },
  ];


const Testimonials = () => {
  return (
    <div className="container mt-5 text-light">
      <h2 className="text-center mb-4 ">Testimonials</h2>
      <div className="row">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={testimonial.image} className="card-img-top" alt="User" />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">
                  <strong>Quality of Service:</strong> {testimonial.qualityOfService}
                </p>
                <p className="card-text">
                  <strong>Age:</strong> {testimonial.age}
                </p>
                <p className="card-text">
                  <strong>Profession:</strong> {testimonial.profession}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials