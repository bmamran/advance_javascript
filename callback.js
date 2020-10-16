function explain_callback(name, age, task) {
    console.log('hello', name);
    console.log('your age', age);
      task();
}
function ice_buger() {
    console.log('he is an ice burger of NDC city corporation')
}
function sweeper() {
    console.log('he serve as a sweeper in DC district')
}
function social_media() {
    console.log('He is a social media manager')
}
explain_callback('babul mia', 34, ice_buger);
explain_callback('kabul mia', 34, sweeper);
explain_callback('jambul mia', 29, social_media);
