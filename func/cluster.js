// /.netlify/functions/cluster

let imageData = [
  {
    filename: null,
    description: "da bear",
    url: "https://image.shutterstock.com/image-photo/sleeping-bear-600w-578281798.jpg",
    tags: "bear bears",
    lat: "33.6240655",
    lon: "-117.734509"
  },
  {
    filename: null,
    description: "cool cat",
    url: "https://data.whicdn.com/images/339215611/original.jpg",
    tags: "cool cat coolcat",
    lat: "33.623858",
    lon: "-117.735394"
  },
  {
    filename: null,
    description: "senior software engineer",
    url: "https://www.malvernelibrary.org/wp-content/uploads/2012/06/Dog-Coding.jpg",
    tags: "dog coding",
    lat: "33.623508",
    lon: "-117.734271"
  }
];

exports.handler = (event, context, callback) => {

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ images: imageData })
  });
}
