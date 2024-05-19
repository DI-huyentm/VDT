import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import AlertMessage from '../AlertMessage/AlertMessage';
const BookData = ({ id, imgSrc, name, author, price, description, addToCart, cartItems, total}) => {
    const booksData = [
        {
          id: 1,
          imgSrc: 'https://www.goodbooksinthewoods.com/pictures/43378.jpg?v=1334241340',
          name: 'Empire Of The Senseless',
          author: 'Acker Kathy',
          price: '170000 VND',
          description: 'Set in the near future, in a Paris devastated by revolution and disease, Empire of the Senseless is narrated by two terrorists and occasional lovers, Thivai, a pirate, and Abhor, part-robot part-human. Together and apart, the two undertake an odyssey of carnage, a holocaust of erotic. "An elegy for the world of our fathers," as Kathy Acker calls it, where the terrorists and the wretched of the earth are in command, marching down a road charted by Genet to a Marseillaise composed by Sade.'
        },
        {
          id: 2,
          imgSrc: 'https://m.media-amazon.com/images/I/71G-8a7RpKL._AC_UF1000,1000_QL80_.jpg',
          name: 'In Memoriam To Identity',
          author: 'Acosta Oscar Zeta',
          price: '210000 VND',
          description: 'In this characteristically sexy, daring, and hyperliterate novel, Kathy Acker interweaves the stories of three characters who share the same tragic flaw: a predilection for doomed, obsessive love. Rimbaud, the delinquent symbolist prodigy, is deserted by his lover Verlaine time and time again. Airplane takes a job dancing at Fun City, the seventh tier of the sex industry, in order to support her good-for-nothing boyfriend. And Capitol feels alive only when she is having sex with her brother, Quentin. In Memoriam to Identity is at once a revelatory addition to, and an irreverent critique of, the literature of decadence and self-destruction.'
          
        },
        {
          id: 3,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/HawklineMonster.JPG/220px-HawklineMonster.JPG',
          name: 'Art Attack: A Short Cultural History of the Avant-Garde',
          author: 'Richard Brautigan',
          price: '130000 VND',
          description: 'In the army, the advance guard is the first wave of soldiers who rush into enemy territory, risking their lives to map out the terrain. In the arts, the avant-garde consists of people who have devoted their talents, even their lives, to seeing the future and to confronting others with their visions. This intriguing introduction to modern art examines the avant-garde from its nineteenth-century origins in Paris to its meaning and influence today. It presents the visionaries who took the greatest risks, who saw the furthest, and who made the most challenging art-art that changed how we imagine our world. From cubism to pop art and beyond, this is the story not only of those risk takers, but of their creations and of the times in which they lived. Notes, bibliography, index.'
        },
        {
          id: 4,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Cover_of_Richard_Brautigan%27s_June_30th%2C_June_30th.jpg',
          name: 'Gang Of Souls: A Generation Of Beat Poets',
          author: 'Davis Stephen',
          price: '100000 VND',
          description: 'Maria Beatty documentary exploring the insights and influences of the American Beat Poets. The film conveys their consciousness and sensibility through interviews with William Burroughs, Allen Ginsberg, Diane Di Prima, among others. Also weaves in additional commentary from contemporary musicians, poets and writers such as Marianne Faithfull, Richard Hell, Lydia Lunch and Henry Rollins. Also expands upon how the poets reached new levels of creativity and inspired social change.'
        },
        {
          id: 5,
          imgSrc: 'https://rareamericana.cdn.bibliopolis.com/pictures/3732070_1.jpg?v=1662664912',
          name: 'Women Of The Left Bank: Paris 1900-1940',
          author: 'Franck Dan',
          price: '100000 VND',
          description: 'Now available in a durable paperback edition, Shari Benstock s critically acclaimed, best-selling Women of the Left Bank is a fascinating exploration of the lives and works of some two dozen American, English, and French women whose talent shaped the Paris expatriate experience in the century s early years.This ambitious historical, biographical, and critical study has taken its place among the foremost works of literary criticism. Maurice Beebe calls it "a distinguished contribution to modern literary history." Jane Marcus hails it as "the first serious literary history of the period and its women writers, making along the way no small contribution to our understanding of the relationships between women artists and their male counterparts, from Henry James to Hemingway, Joyce, Picasso, and Pound.'
          
        },
        {
          id: 6,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/2/24/RommelDrivesOnDeepIntoEgypt.jpg',
          name: 'The Goncourt Brothers',
          author: 'Franklin Benjamin V ed.',
          price: '220000 VND',
          description: 'Born nearly ten years apart into a French aristocratic family, the two brothers formed an extraordinarily productive and enduring literary partnership, collaborating on novels, criticism, and plays that pioneered the new aesthetic of naturalism. But the brothers’ talents found their most memorable outlet in their journal, which is at once a chronicle of an era, an intimate glimpse into their lives, and the purest expression of a nascent modern sensibility preoccupied with sex and art, celebrity and self-exposure. The Goncourts visit slums, brothels, balls, department stores, and imperial receptions; they argue over art and politics and trade merciless gossip with and about Hugo, Baudelaire, Degas, Flaubert, Zola, Rodin, and many others. And in 1871, Edmond maintains a vigil as his brother dies a slow and agonizing death from syphilis, recording every detail in the journal that he would continue to maintain alone for another two decades.'
        },
        {
          id: 7,
          imgSrc: 'https://upload.wikimedia.org/wikipedia/en/c/c7/SombreroFallout.jpg',
          name: 'My Life and Loves in Greenwich Village',
          author: 'Frees Paul',
          price: '150000 VND',
          description: 'Bodenheim s memoir, My Life and Loves in Greenwich Village, released six months after his death in 1954, was ghostwritten by Samuel Roth. He had been paying the down-and-out Bodenheim for his biographical stories about Greenwich Village at the time of the writer s murder.'
          
        },
        {
          id: 8,
          imgSrc: 'https://1960sdaysofrage.files.wordpress.com/2017/06/brautigancover.jpeg',
          name: 'My Sisters Hand In Mine',
          author: 'French Warren',
          price: '270000 VND',
          description: 'Though she wrote only one novella, one short play, and fewer than a dozen short stories over a roughly twenty-year span from the early 1940s to the mid-1960s, Jane Bowles has long been regarded by critics as one of the premier stylists of her generation. Enlivened at unexpected moments by sexual exploration, mysticism, and flashes of wit alternately dry and hilarious, her prose is spare and honed, her stories filled with subtly sly characterizations of men and, mostly, women, dissatisfied not so much with the downward spiral of their fortunes as with the hollowness of their neat little lives. Whether focused on the separate emergences of Miss Goering and Mrs. Copperfield from their affluent, airless lives in New York and Panama into a less defined but intense sexual and social maelstrom in the novella Two Serious Ladies, or on the doomed efforts of the neighbors Mr. Drake and Mrs. Perry to form a connection out of their very different loneliness in "Plain Pleasures," or on the bittersweet cultural collision of an American wife and a peasant woman in Morocco in "Everything Is Nice," Jane Bowles creates whole worlds out of the unexpressed longings of individuals, adrift in their own lives, whether residing in their childhood homes or in faraway lands that are somehow both stranger and more familiar than what they left behind'
        },
        {
          id: 9,
          imgSrc: 'https://mpd-biblio-covers.imgix.net/9780312277109.jpg?w=300',
          name: 'Two Serious Ladies',
          author: 'Fritz James',
          price: '100000 VND',
          description: 'Eccentric, adventurous Christina Goering meets the anxious but equally enterprising Mrs. Copperfield at a party.Two serious ladies who want to live outside of themselves, they go in search of salvation: Mrs. Copperfield visits Panama with her husband, where she finds solace among the women who live and work in its brothels; while Miss Goering becomes involved with various men. At the end the two women meet again, each changed by her experience.Mysterious, profound, anarchic and very funny, Two Serious Ladies is a daring, original work that defies analysis.'
        },
        {
          id: 10,
          imgSrc: 'https://m.media-amazon.com/images/I/81OBVqzun9L._AC_UF894,1000_QL80_.jpg',
          name: 'Let It Come Down',
          author: 'Conners Peter',
          price: '180000 VND',
          description: 'In Let It Come Down , Paul Bowles plots the doomed trajectory of Nelson Dyar, a New York bank teller who comes to Tangier in search of a different life and ends up giving in to his darkest impulses. Rich in descriptions of the corruption and decadence of the International Zone in the last days before Moroccan independence, Bowles s second novel is an alternately comic and horrific account of a descent into nihilism'
        },
        {
          id: 11,
          imgSrc: 'https://m.media-amazon.com/images/I/61I7IH8sryL._AC_UF1000,1000_QL80_.jpg',
          name: 'Stories of Paul Bowles',
          author: 'Cook Bruce',
          price: '170000 VND',
          description: '“Bowles s tales are at once austere, witty, violent, and sensuous. They move with the inevitability of myth. His language has a purity of line, a poise and authority entirley its own.” —Tobias WolffAn American cult figure, Paul Bowles has fascinated such disparate talents as Norman Mailer, Allen Ginsberg, Truman Capote, William S. Burroughs, Gore Vidal, and Tobias Wolff. From “The Delicate Prey” to “Too Far from Home,” this definitive collection celebrates the Bowles’s masterful artistry in short fiction.'
        },
        {
          id: 12,
          imgSrc: 'https://pictures.abebooks.com/inventory/md/md31335414127.jpg',
          name: 'Paris By Night',
          author: 'Coolidge Clark',
          price: '290000 VND',
          description: 'Roaming Paris streets by night in the early 1930s, Brassa created arresting images of the city s dramatic nocturnal landscape. First published in French in 1932, this new edition brings one of Brassa s finest works back into print. The back alleys, metro stations, and bistros he photographed are at turns hauntingly empty or peopled by prostitutes, laborers, thugs, and lovers. "Paris by Night" is a stunning portrait of nighttime in the City of Light, as captured by its most articulate observer. 62 photos.'
        },
        {
          id: 13,
          imgSrc: 'https://m.media-amazon.com/images/I/81T3dFGRkpL._AC_UF1000,1000_QL80_.jpg',
          name: 'Sacred Band: A Litany Of Ingratitude',
          author: 'Christopher Tom',
          price: '180000 VND',
          description: 'Hilda Doolittle and Winifred Ellerman made significant contributions to the expatriate Modernist movement without living in Pans. H. D. consciously chose not to live there, finding the city too demanding of her psychic energies and feeling herself an outsider among the expatriates, all of whom seemed to have arrived in France with letters of introduction to the most important Modernist figures. Bryher, an heir to her father s shipping fortune, had been counseled by him to take up residence in Switzerland as a tax shelter. Consequently, both women spent most of their adult lives living in London and Switzerland, making brief'
        },
        {
          id: 14,
          imgSrc: 'https://image.isu.pub/110824040543-f1b9383d35c04ca1aa5d77569aa26cf0/jpg/page_1.jpg',
          name: 'Engendering Flood: Book One of Dust Shall be the Serpents Fool (Cantos I-IV)',
          author: 'Eastman Max',
          price: '270000 VND',
          description: 'Winifred Ellerman proposed marriage to Robert McAlmon during tea at the Hotel Brevoort on Valentine’s Day, 1911, and they were married at New York City Hall later in the day. That morning, Margaret Anderson and Jane Heap appeared before a Special Sessions Court in New York City on obscenity charges arising from their serial publication of James Joyce’s Ulysses in the Little Review. Two of the three judges, however, “found incomprehensible the offending passages from Nausikaa read to them” and postponed the trial for a week in order to read the episode in its entirety (Litterdale and Nicholson, Dear'
        },
        {
          id: 15,
          imgSrc: 'https://m.media-amazon.com/images/I/71jG9hYpnSL._AC_UF1000,1000_QL80_.jpg',
          name: 'Man-Fate: The Swan Song Of Brother Antonius',
          author: 'Easton Malcolm',
          price: '270000 VND',
          description: 'Writing of England in the 19305, Samuel Hynes comments that the decade was less determined by a “fixed and definable set of characteristics” than by a developing consciousness that changed according to circumstances (Auden Generation, 11—12.). The circumstances directing cultural and social change were more openly political in the thirties than in the twenties, but the polarization of attitudes that retrospectively appeared to define this decade was not so clearly marked in the immediate moment. In 1931, Paris witnessed the mass emigration of American expatriates, forced to return home by the Wall Street crash. But the crash itself was...'
        },
        {
          id: 16,
          imgSrc: 'https://m.media-amazon.com/images/I/91mEWmXCZNL._AC_UF1000,1000_QL80_.jpg',
          name: 'Prodigious Thrust Turkish',
          author: 'Edington Stephen D.',
          price: '100000 VND',
          description: 'On I September 1939, Ezra Pound was in Rapallo, where he had lived since autumn 1924. He had grown tired of France, Noel Stock reports, not simply because he felt in the mid-twenties that the country had “no writer of the first magnitude,” but because he felt uncomfortable in the predominantly American expatriate community (Life of Ezra Pound, 256). More significantly, however, he believed that important things were happening elsewhere; in particular, he found the atmosphere of Italy after Mussolini\'s march on Rome in October 1922 more agreeable than that of France. During the 19308, Pound had continued work...',
        },
        {
          id: 17,
          imgSrc: 'https://m.media-amazon.com/images/I/31nHS+orHqL._AC_UF1000,1000_QL80_.jpg',
          name: 'River-Root: A Syzygy',
          author: 'Fink Larry',
          price: '160000 VND',
          description: 'Reviews 189 Whitman and William Carlos Williams, the most insightful poets included here know that to reveal the profundities of the everyday is the true calling of the American poet. Poets ask us to realize that to know a place we must look closely, the way Wendell Berry, in “The Snake,” looks at “a small snake whose back/was pat­ terned with the dark/of the dead leaves he lay on.”A poet of sensitive and vivid detail, Berry continues, “I held him a long time,/thinking of the perfection of the dark/marking on his back, the death/that swelled him, his living cold.”It is in this kind of sensitivity to detail—to the smallest patterns of detail on a small snake’sback—that the best verse included here exhibits. Small discoveries yield profound insights. William Stafford notices, in the last line of his belated poem “When I Was Young,” that “The clocks, though, still pursue what they endlessly loved.”We, like Stafford, are surprised by the obvious. Not only is the reader startled by the commonplace, and not only asked to see the old in a new way, but to listen differently, too.'
        },
        {
          id: 18,
          imgSrc: 'https://m.media-amazon.com/images/I/51+o3l4zwML._AC_UF1000,1000_QL80_.jpg',
          name: 'Residual Years',
          author: 'Fitch Noel Riley',
          price: '230000 VND',
          description: 'Ted Kooser reminds us, in telling us “How to Make Rhubarb Wine,” that if you set out to pick a sack of rhubarb, “God knows watch for rattlesnakes/or better, listen; they make a sound/like an old lawn mower rolled downhill.”And finally, Robert Morgan, in “Hubcaps,” defamiliarizes the old images: “The tractor runs over dirt and shapes it, turning/stubble and moving the hill/furrow by furrow to the ter­ races,/slicing clods, wearing/them away and chopping roots/to rot in sweet beds of decay.”Perhaps we’ve noticed this activity many times, but until we read this passage, it is as ifwe had never seen it before. The poems of this anthology express a range of experiences, from loss to anger to despair, from the virtues of honesty and integrity to familial love, in spite of their use of subjects that would at first appear to have little or no worth, like corn picking, or a hog killing, or an Easter colt. By continually demonstrat­ ing that there are indeed universes in grains of sand, the poets here have reminded us of the essential mystery in the light of common day.'
        },
        {
          id: 19,
          imgSrc: 'https://m.media-amazon.com/images/I/514Qc8vDyFL._AC_UF1000,1000_QL80_.jpg',
          name: 'Single Source: The Early Poems Of William Everson [1934-1940]',
          author: 'Ford Hugh',
          price: '170000 VND',
          description: 'Ted Kooser reminds us, in telling us “How to Make Rhubarb Wine,” that if you set out to pick a sack of rhubarb, “God knows watch for rattlesnakes/or better, listen; they make a sound/like an old lawn mower rolled downhill.”And finally, Robert Morgan, in “Hubcaps,” defamiliarizes the old images: “The tractor runs over dirt and shapes it, turning/stubble and moving the hill/furrow by furrow to the ter­ races,/slicing clods, wearing/them away and chopping roots/to rot in sweet beds of decay.”Perhaps we’ve noticed this activity many times, but until we read this passage, it is as ifwe had never seen it before. The poems of this anthology express a range of experiences, from loss to anger to despair, from the virtues of honesty and integrity to familial love, in spite of their use of subjects that would at first appear to have little or no worth, like corn picking, or a hog killing, or an Easter colt. By continually demonstrat­ ing that there are indeed universes in grains of sand, the poets here have reminded us of the essential mystery in the light of common day.'
        },
        {
          id: 20,
          imgSrc: 'https://m.media-amazon.com/images/I/51yvGHV1B8L._AC_UF350,350_QL50_.jpg',
          name: 'Veritable Years: Poems 1949-1966 Volume II Of The Collected Poems',
          author: 'Ford James L.',
          price: '200000 VND',
          description: 'The husband and wife live beside the river, and their joining is equated to the joining of the great, continent-scouring river to the Gulf. It is also equated to the joining of animals far up in the sources of the river—the Rocky Mountain crags where the “bighorn ram covers his ewe in a rushing tussle, the loose rock/ Swirls under chipping hooves,”or the “water delled flats”where “the mountain buck springs his start in the doe,/Pine needled earth rucked under his pitch, the rubbed antlers rattling.”But thejoining of the human couple is more than any of these couplings, “For over the bed/Spirit hovers, and in their flesh/ Spirit exults . . .’’To quote these few lines is only to hint at the resonances that infuse the poem but never render it pompous or over-solemn. This sexual union is archetypal and sacramental; it is a syzygy in its root meaning of “a coupling,”and in its...'
        }
      ];
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const handleViewSpecific = () => {
        navigate(`/SpecificBookPage/${id}`, {state: {booksData: booksData, cartItems: cartItems}})
    }
    const handleAddToCart = () => {
        addToCart({ id, imgSrc, name, author, price });
        setShowAlert(true);
        setTimeout(() => {
           setShowAlert(false);
        }, 2000);
    };

    return (
        <div className='bookSection'>
            {showAlert && <AlertMessage/>}
            <img src={imgSrc} alt="" className='bookImg' onClick={handleViewSpecific}/>
            <p className='bookName'>{name}</p>
            <p className='bookAuthor'>{author}</p>
            <p className='bookPrice'>{price}</p>
            <p className='bookDescription'>{description}</p>
            <button className='addToCart' onClick={handleAddToCart} >Add to <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default BookData;
