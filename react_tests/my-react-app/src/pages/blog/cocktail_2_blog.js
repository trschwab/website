// src/pages/CocktailBlogPage.js
import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    id: 1,
    title: 'Technicolor Dreamcoat',
    snippet: 'This is a cocktail I had had at famed NYC bar Attaboy, from Milk and Honey’s Sam Ross and Michael McIlroy. A variation on The Famous Blue Raincoat deriving from Zac Pease at now defunct My Friend Duke in 2018, this cocktail is a tailored version of a Negroni. It stands out by including LoFi’s Gentian Amaro, a flavorful purple delight that helps to round out any boxy edges.',
    recipe: `
      1.5 oz beefeater gin
      .5 oz LoFi Gentian Amaro
      .5 oz Bruto Americano
      .5 oz Dolin Blanc

      Ice stir, garnish with orange or grapefruit peel
    `,
    image: '/blog_media/cocktail_2_blog_media/black-rock-chiller.jpg'
  },
  {
    id: 1,
    title: 'The Thumbs Up!',
    snippet: 'Snippet todo',
    recipe: `
	1 oz Gin
	1/2 oz Green Chartreuse
	3/4 oz Lime
	1/2 oz Aperol
	1/2 oz Maraschino

	Shaken, garnish with lemon twist
    `,
    image: '/blog_media/cocktail_2_blog_media/thumbs-up.jpg'
  },
  {
    id: 1,
    title: 'Shogun',
    snippet: 'Snippet todo',
    recipe: `
	3/2 oz mezcal
	3/4 oz green chartreuse
	3/4 oz habanero syrup
	3/4 oz pineapple
	3/4 oz lime juice

	Shaken, strained into a Collins glass, over ice

	Garnish with 2 sprigs of Coriander
    `,
    image: '/blog_media/cocktail_2_blog_media/todo.jpg'
  },
  {
    id: 1,
    title: 'Grappino',
    snippet: 'Snippet todo',
    recipe: `
	2/3 ounce grappa
	1/2 ounce amaretto
	1 oz (or 1 shot) espresso

	Shake all over ice

	Top with soya cream OR whipped cream

	Grated nutmeg over top

    `,
    image: '/blog_media/cocktail_2_blog_media/grappino.webp'
  },
  {
    id: 1,
    title: 'Rosina Ferrario No 203',
    snippet: 'Snippet todo',
    recipe: `
	1 + 1/2 ounce Nonnino Vigneti Moscato (white grappa)
	1/2 ounce maraschino
	1/2 ounce violette
	1/2 ounce lemon juice
	Garnish with edible rose / violet

	Shake all over ice
    `,
    image: '/blog_media/cocktail_2_blog_media/rosina-ferrario.jpg'
  },
  {
    id: 1,
    title: 'Brauliocano',
    snippet: 'Snippet todo',
    recipe: `

	1 + 1/2 ounce Braulio
	1 + 1/2 ounce Cocchio Americano
	2 full zqueezes of Orange Citrate Bitters
	Top with Topo Chico

	Stir softly over ice
    `,
    image: '/blog_media/cocktail_2_blog_media/brauliocano.jpg'
  },
  {
    id: 1,
    title: 'Black Rock Chiller',
    snippet: 'Snippet todo',
    recipe: `

	3/4 ounce Branca Mente
	3/4 ounce Suze
	3/4 Ounce Olmeca Altos Reposado

	Stir with no ice, serve neat
    `,
    image: '/blog_media/cocktail_2_blog_media/black-rock-chiller.jpg'
  },
  {
    id: 1,
    title: 'Coffee & Italicus',
    snippet: 'Snippet todo',
    recipe: `
	1 + 1/2 ounces Italicus
	3 ounces Tonic
	1/3 ounce coldbrew coffee

	Mix Italicus and Tonic, stir softly over ice, add tonic as needed; top with coffee and serve with a lime wedge

    `,
    image: '/blog_media/cocktail_2_blog_media/.jpg'
  },
  {
    id: 1,
    title: 'Italicus Spritz',
    snippet: 'Snippet todo',
    recipe: `
	2 ounces Italicus
	4 ounces Prosecco

	Stir softly over ice, garnish with olives
    `,
    image: '/blog_media/cocktail_2_blog_media/.jpg'
  },
  {
    id: 1,
    title: 'Pavan Seltzer',
    snippet: 'Snippet todo',
    recipe: `
	1 ounce Pavan
	4 ounces San Pellegrino
	1/4 ounce Lemon Juice

	Stir softly over ice, more generally this is a loose recipe subject to splash of this or dash of that

    `,
    image: '/blog_media/cocktail_2_blog_media/.jpg'
  },
  {
    id: 1,
    title: 'Black Pavan',
    snippet: 'Snippet todo',
    recipe: `
	4 ounce black tea*
	1 ounce Pavan
	1/4 ounce / splash of Lemon Juice

	Stir softly over ice

    `,
    image: '/blog_media/cocktail_2_blog_media/.jpg'
  },




];

const CocktailBlogPage = () => {
  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CocktailBlogPage;





//  {'\n'}{'\n'}
//  <h1 style={{ textAlign: 'center' }}>El Yucateco</h1>
// {'\n'}{'\n'}&emsp;
//  1.5oz Mezcal{'\n'}&emsp;
//  1.5oz Pineapple{'\n'}&emsp;
//  1/2oz Habanero Syrup{'\n'}&emsp;
//  1/2oz Lime Juice{'\n'}&emsp;
//  Garnish w Limewheel{'\n'}&emsp;
//  {'\n'}{'\n'}
//  <h1 style={{ textAlign: 'center' }}>Naked and Famous</h1>
// {'\n'}{'\n'}&emsp;
//  3/4oz mezcal{'\n'}&emsp;
//  3/4oz yellow (or green) chartreuse{'\n'}&emsp;
//  3/4z aperol{'\n'}&emsp;
//  3/4oz lime{'\n'}&emsp;
//  Garnish with Lime Wedge{'\n'}&emsp;

//  {'\n'}{'\n'}
//  <h1 style={{ textAlign: 'center' }}>Campari over Rocks</h1>
// {'\n'}{'\n'}
//     <img src="/blog_media/cocktail_2_blog_media/campari-rocks.jpg" alt="photo of a caipirinha" style={{ display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
// {'\n'}{'\n'}&emsp;
//  2oz Campari, poured over ice
//  {'\n'}{'\n'}









// <h1 style={{ textAlign: 'center' }}>Champs Elysees</h1>
// {'\n'}{'\n'}&emsp;
// 2 ounces Cognac{'\n'}&emsp;
// 3/4 ounces Lemon Juice{'\n'}&emsp;
// 1/2 ounce Green Chartreuse{'\n'}&emsp;
// 1/4 ounce Simple Syrup{'\n'}&emsp;
// {'\n'}{'\n'}
// Shake over ice
// {'\n'}{'\n'}
// <h1 style={{ textAlign: 'center' }}>Calvados 75</h1>
// {'\n'}{'\n'}
//     <img src="/blog_media/cocktail_2_blog_media/calvados.jpg" alt="photo of a caipirinha" style={{ display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
// {'\n'}{'\n'}&emsp;
// 1 ounce Calvados{'\n'}&emsp;
// 1/2 ounce Lemon Juice{'\n'}&emsp;
// 1/2 ounce Simple Syrup{'\n'}&emsp;
// Champagne{'\n'}&emsp;
// {'\n'}{'\n'}
// Mix Calvados, Lemon, and Simple Syrup, shake over ice and top with Champagne
//       </p>
//     </div>
//     </div>
//     </div>
//   );
// };
