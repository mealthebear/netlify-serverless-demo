// /.netlify/functions/yep

exports.handler = function(event, context, callback) {
  //event - similar to Express request object
  console.log(event);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Yep. Yep. Yep.'}),
  });
}