
$(document).ready(function(){
  var oil = "Кедровое масло – поистине уникальный продукт! Получают его путем холодного отжима. Оно не имеет противопоказаний и является кладезью витаминов, минеральных веществ, микроэлементов и полиненасыщенных жирных кислот. Масло нормализует работу центральной нервной системы, снижает уровень холестерина и повышает иммунитет к респираторным заболеваниям. Оно незаменимо в кулинарии, придает пикантный вкус и нежный аромат овощным салатам, холодным и горячим закускам, выпечке. В косметологии также широко используется кедровое масло, ведь благодаря витамину Е, оно способствует регенерации кожи, дарит ей молодость, красоту и сияние.";
  var nut = 'Растительный белок кедрового ореха идеально сбалансирован , по составу близок к белкам ткани человека и усваивается организмом на 99%. Другим фактором, определяющим высокую питательную ценность кедрового ореха является то, что кедровый орех содержит практически все незаменимые витамины, минеральные элементы, полиненасыщенные жирные и аминокислоты, одна из которых, аргинин, незаменима в питании и развитии растущего организма, поэтому кедровый орех непременно должен стать ежедневной частью рациона как взрослых, так и детей.'
  function product(name, subtext, paragraph, image){
    this.name = name;
    this.subtext = subtext;
    this.paragraph = paragraph;
    this.image = image;
  }
  function changeProduct(pro){
    $('.block__carousel').animate({
      'delay' : 500
    }, function(){
        $('.productName').text(pro.name);
        $('.productSub').text(pro.subtext);
        $('.productData').text(pro.paragraph);
        $('.carousel__img img').attr({
          'src': pro.image,

      });

    });

  }
  var productOne = new product('Масло 100 мл', 'в стекляной и металической упаковке', oil, 'img/ok/oil100.jpg');
  var productTwo = new product('Кедровый орех','весовой',nut, 'img/ok/5kg.jpg');
  var productThree = new product('Кедровый орех','в фирменной упаковке', nut, 'img/ok/pack.png');
  var productFour = new product( 'Масло 250 мл', 'в стекляной бутылке',oil, 'img/ok/oil250.jpg');
  var productFive = new product('Масло 500 мл','в стекляной бутылке',  oil, 'img/ok/oil500.jpg');
  changeProduct(productOne);
  $("#button1").addClass('active');
  $(function(){
    $('ul.pagination li').click(function(){
      var n = $(this).attr('data-vaule'),
          a = '#button' + n,
          prod = productOne;
      switch(n){
        case '1':
          prod = productOne;
          break;
        case '2':
          prod = productTwo;
          break;
        case '3':
          prod = productThree;
          break;
        case '4':
          prod = productFour;
          break;
        case '5':
          prod = productFive;
          break;
        default:
          prod = productOne;
      };
      $('#button1, #button2,#button3,#button4,#button5').removeClass('active');
      $(a).addClass('active');
      changeProduct(prod);
    });
  });
  $(function(){
    $('.navbar-nav li a').click(function(){
      var n = $(this).attr('data-vaule');
      var a = '.navbar-nav li:nth-child(' + n + ')';
      $('.navbar-nav li').removeClass('active');
      $(a).addClass('active');
    });
  });
/*  $('.certOne').click(function(){
    $('.block__certificate-img img').attr({
      'src' : 'img/ok/wildtextures-old-wood-original-file.jpg'
    });
    $('.certTwo, .certThree, .certFour').removeClass('active')
    $('.certOne').addClass('active');

  });
  $('.certTwo').click(function(){
    $('.block__certificate-img img').attr({
      'src' : 'img/ok/curve-wood-texture-tekstura.jpg'
    });
    $('.certOne, .certThree, .certFour').removeClass('active')
    $('.certTwo').addClass('active');
  });
  $('.certThree').click(function(){
    $('.block__certificate-img img').attr({
      'src' : 'img/ok/wildtextures-old-wood-original-file.jpg'
    });
    $('.certTwo, .certOne, .certFour').removeClass('active')
    $('.certThree').addClass('active');
  });
  $('.certFour').click(function(){
    $('.block__certificate-img img').attr({
      'src' : 'img/ok/curve-wood-texture-tekstura.jpg'
    });
    $('.certTwo, .certThree, .certOne').removeClass('active')
    $('.certFour').addClass('active');
  });*/

});
