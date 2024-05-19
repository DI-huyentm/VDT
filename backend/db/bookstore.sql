-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2024 at 05:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookgenres`
--

CREATE TABLE `bookgenres` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookgenres`
--

INSERT INTO `bookgenres` (`id`, `book_id`, `genre_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 4),
(4, 4, 5),
(5, 5, 3),
(6, 6, 5),
(7, 7, 2),
(8, 8, 4),
(9, 9, 5),
(10, 10, 2),
(11, 11, 1),
(12, 12, 4),
(14, 14, 5),
(15, 15, 3),
(16, 16, 5),
(17, 17, 4),
(18, 18, 5),
(19, 19, 3),
(20, 20, 5),
(21, 21, 4),
(22, 22, 5),
(23, 23, 3),
(24, 24, 5),
(25, 25, 4),
(27, 18, 3);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 200,
  `image` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `price`, `quantity`, `image`, `description`) VALUES
(1, 'Empire Of The Senseless', 'Acker Kathy', 170000, 200, 'https://m.media-amazon.com/images/I/51kS07+nDwL.jpg', 'Set in the near future, in a Paris devastated by revolution and disease, Empire of the Senseless is narrated by two terrorists and occasional lovers, Thivai, a pirate, and Abhor, part-robot part-human. Together and apart, the two undertake an odyssey of carnage, a holocaust of erotic. \"An elegy for the world of our fathers,\" as Kathy Acker calls it, where the terrorists and the wretched of the earth are in command, marching down a road charted by Genet to a Marseillaise composed by Sade.'),
(2, 'In Memoriam To Identity', 'Acosta Oscar Zeta', 210000, 200, 'https://m.media-amazon.com/images/I/71G-8a7RpKL._AC_UF1000,1000_QL80_.jpg', 'In this characteristically sexy, daring, and hyperliterate novel, Kathy Acker interweaves the stories of three characters who share the same tragic flaw: a predilection for doomed, obsessive love. Rimbaud, the delinquent symbolist prodigy, is deserted by his lover Verlaine time and time again. Airplane takes a job dancing at Fun City, the seventh tier of the sex industry, in order to support her good-for-nothing boyfriend.'),
(3, 'Art Attack: A Short Cultural History of the Avant-Garde', 'Richard Brautigan', 130000, 200, 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/HawklineMonster.JPG/220px-HawklineMonster.JPG', 'In the army, the advance guard is the first wave of soldiers who rush into enemy territory, risking their lives to map out the terrain. In the arts, the avant-garde consists of people who have devoted their talents, even their lives, to seeing the future and to confronting others with their visions. This intriguing introduction to modern art examines the avant-garde from its nineteenth-century origins in Paris to its meaning and influence today. It presents the visionaries who took the greatest risks, who saw the furthest, and who made the most challenging art-art that changed how we imagine our world. From cubism to pop art and beyond, this is the story not only of those risk takers, but of their creations and of the times in which they lived. Notes, bibliography, index.'),
(4, 'Gang Of Souls: A Generation Of Beat Poets', 'Davis Stephen', 100000, 200, 'https://upload.wikimedia.org/wikipedia/en/a/a6/Cover_of_Richard_Brautigan%27s_June_30th%2C_June_30th.jpg', 'Maria Beatty\'s documentary exploring the insights and influences of the American Beat Poets. The film conveys their consciousness and sensibility through interviews with William Burroughs, Allen Ginsberg, Diane Di Prima, among others. Also weaves in additional commentary from contemporary musicians, poets and writers such as Marianne Faithfull, Richard Hell, Lydia Lunch and Henry Rollins. Also expands upon how the poets reached new levels of creativity and inspired social change.'),
(5, 'Women Of The Left Bank: Paris 1900-1940', 'Franck Dan', 100000, 200, 'https://m.media-amazon.com/images/I/81bGWDiGWpL._AC_UF1000,1000_QL80_.jpg', 'These women were part of the artistic community that formed on the Paris Left Bank early in the twentieth century. Their literary contributions—which include major works of prose, poetry, drama, critical and journalistic essays, autobiographies, pensées, and memoirs—display wide-ranging interests and diverse talents. In addition to their own writing activities, several of these women set up bookshops, publishing houses, hand presses, little magazines, and artistic salons through which they advertised and marketed the products of literary Paris.'),
(6, 'The Goncourt Brothers', 'Franklin Benjamin V ed.', 220000, 200, 'https://upload.wikimedia.org/wikipedia/en/2/24/RommelDrivesOnDeepIntoEgypt.jpg', 'To trace the roots of the expatriate woman’s experience in Paris, we must return to a period in history that appears to share as little with Paris between the world wars as Henry James’s New York shares with contemporary Greenwich Village. We must begin with James’s good friend, Edith Wharton, herself a product of Old New York. On a bleak December afternoon in 1893, she stood at the door of a house on the rue Barbet-de-Jouy, a street intersecting the fashionable rue de Varenne, in the heart of the Faubourg St. Germain on the Paris Left Bank.'),
(7, 'My Life and Loves in Greenwich Village', 'Frees Paul', 150000, 200, 'https://upload.wikimedia.org/wikipedia/en/c/c7/SombreroFallout.jpg', 'The second phase of the belle époque, between 1900 and the Great War, was marked by advances and retreats, by an emerging Modernism and a clinging to old ways. The twentieth century was ushered into France with the Paris Exhibition. Among the technological advances on display for the world’s fair were the first stone bridge (the Alexandre III), completed just in time for the exhibition, the Paris Metropolitain, which gave underground rides across the city, and two glass exhibition halls, the Grand Palais and the Petit Palais. Seen today, these monuments display a rather quaint and Old World quality, suggesting...'),
(8, 'My Sisters Hand In Mine', 'French Warren', 270000, 200, 'https://1960sdaysofrage.files.wordpress.com/2017/06/brautigancover.jpeg', 'Much about the Paris described in previous chapters was unknown to the Americans who invaded the city following World War I: these newcomers were little interested in the “French” aspect of Paris. They sought respite from an America they found to be politically naive, puritanically restrictive, and culturally deprived. For some, the need for escape was itself a sign of self-destructive tendencies. For others, expatriation meant real liberation. For women, America was a particularly oppressive environment, and among the expatriate women were those who took up Edith Wharton’s “argument with America” on “the woman question,” finding in...'),
(9, 'Two Serious Ladies', 'Fritz James', 100000, 200, 'https://mpd-biblio-covers.imgix.net/9780312277109.jpg?w=300', 'Gertrude Stem wrote in Paris France that “every century has a beginning and a middle and an ending. ... it begins that is it has a childhood it has an adolescence it has an adult life, it has a middle life and an older life and then it ends” (116). The birth of the twentieth century coincided with Stein\'s emergence into adulthood; by the time the twentieth century reached its middle age, Stein was dead of cancer in Paris. When she arrived in that city in 1903, the nineteenth century was in its death throes; Paris, like other Kuropean...'),
(10, 'Let It Come Down', 'Conners Peter', 180000, 200, 'https://m.media-amazon.com/images/I/81OBVqzun9L._AC_UF894,1000_QL80_.jpg', 'In May 1938, the owner of La Maison des Amis des Livres at 7, rue de I’Odéon, broadcast over Radio-Paris a “Letter to Listeners.” Adrienne Monnier began her spoken letter with a hypothetical objection from the 4 male listening audience: “‘les Ami-es des Livres’ . . . they do not exist, of course. Women are incapable of loving books; far from being their friends, they are their natural enemies” (“Les Amies des Livres,” in The Very Rich Hours of Adrienne Monnier, 183).¹ More than twenty years earlier, Monnier had opened the first lending library ever established in...'),
(11, 'Stories of Paul Bowles', 'Cook Bruce', 170000, 200, 'https://m.media-amazon.com/images/I/61I7IH8sryL._AC_UF1000,1000_QL80_.jpg', 'If there was an intellectual center to the expatriate experience in Paris, it existed on the rue de I’Odéon. Sylvia Beach and Adrienne Monnier made major contributions to the life of this literary community in providing a focus for its social and artistic interchange. Shakespeare and Company and La Maison des Amis des Livres became the hub of expatriate literary life from which all other activities radiated and to which all participants—male, female, rich, poor, known, unknown, talented or mediocre—were drawn. During the day, the rue de I’Odéon was a busy thoroughfare as poets and novelists, dramatists and translators, scurried...'),
(12, 'Paris By Night', 'Coolidge Clark', 290000, 200, 'https://pictures.abebooks.com/inventory/md/md31335414127.jpg', 'If among the expatriate women of Paris Djuna Barnes suffered most intensely the effects of her upbringing in a puritan culture, Natalie Barney was least affected by American Protestant morality. Barney seems to have existed entirely apart from certain aspects of Western culture, escaping the pervasive guilt from which most of her generation suffered. Her knowledge of organized religion was minimal (she took communion only once and claimed uncertainty about whether Christmas marked the birth or death of Christ); her interest in pagan cultures was in part a reaction against Christian insistence that bodily pleasures be sacrificed to preserve the...'),
(14, 'Sacred Band: A Litany Of Ingratitude', 'Christopher Tom', 180000, 200, 'https://m.media-amazon.com/images/I/81T3dFGRkpL._AC_UF1000,1000_QL80_.jpg', 'Hilda Doolittle and Winifred Ellerman made significant contributions to the expatriate Modernist movement without living in Pans. H. D. consciously chose not to live there, finding the city too demanding of her psychic energies and feeling herself an outsider among the expatriates, all of whom seemed to have arrived in France with letters of introduction to the most important Modernist figures. Bryher, an heir to her father’s shipping fortune, had been counseled by him to take up residence in Switzerland as a tax shelter. Consequently, both women spent most of their adult lives living in London and Switzerland, making brief...'),
(15, 'Engendering Flood: Book One of Dust Shall be the Serpents Fool (Cantos I-IV)', 'Eastman Max', 270000, 200, 'https://image.isu.pub/110824040543-f1b9383d35c04ca1aa5d77569aa26cf0/jpg/page_1.jpg', 'Winifred Ellerman proposed marriage to Robert McAlmon during tea at the Hotel Brevoort on Valentine’s Day, 1911, and they were married at New York City Hall later in the day. That morning, Margaret Anderson and Jane Heap appeared before a Special Sessions Court in New York City on obscenity charges arising from their serial publication of James Joyce’s Ulysses in the Little Review. Two of the three judges, however, “found incomprehensible the offending passages from Nausikaa read to them” and postponed the trial for a week in order to read the episode in its entirety (Litterdale and Nicholson, Dear...'),
(16, 'Man-Fate: The Swan Song Of Brother Antonius', 'Easton Malcolm', 270000, 200, 'https://m.media-amazon.com/images/I/71jG9hYpnSL._AC_UF1000,1000_QL80_.jpg', 'Writing of England in the 19305, Samuel Hynes comments that the decade was less determined by a “fixed and definable set of characteristics” than by a developing consciousness that changed according to circumstances (Auden Generation, 11—12.). The circumstances directing cultural and social change were more openly political in the thirties than in the twenties, but the polarization of attitudes that retrospectively appeared to define this decade was not so clearly marked in the immediate moment. In 1931, Paris witnessed the mass emigration of American expatriates, forced to return home by the Wall Street crash. But the crash itself was...'),
(17, 'Prodigious Thrust', 'Edington Stephen D.', 100000, 200, 'https://m.media-amazon.com/images/I/91mEWmXCZNL._AC_UF1000,1000_QL80_.jpg', 'On I September 1939, Ezra Pound was in Rapallo, where he had lived since autumn 1924. He had grown tired of France, Noel Stock reports, not simply because he felt in the mid-twenties that the country had “no writer of the first magnitude,” but because he felt uncomfortable in the predominantly American expatriate community (Life of Ezra Pound, 256). More significantly, however, he believed that important things were happening elsewhere; in particular, he found the atmosphere of Italy after Mussolini\'s march on Rome in October 1922 more agreeable than that of France. During the 19308, Pound had continued work...'),
(18, 'Think Java', 'Allen B. Downey', 160000, 200, 'https://target.scene7.com/is/image/Target/GUEST_a4e0d3f0-5f00-49e4-a53d-1c1157d663a6?wid=488&hei=488&fmt=pjpeg', 'Reviews 189 Whitman and William Carlos Williams, the most insightful poets included here know that to reveal the profundities of the everyday is the true calling of the American poet. Poets ask us to realize that to know a place we must look closely, the way Wendell Berry, in “The Snake,” looks at “a small snake whose back/was pat­ terned with the dark/of the dead leaves he lay on.”A poet of sensitive and vivid detail, Berry continues, “I held him a long time,/thinking of the perfection of the dark/marking on his back, the death/that swelled him, his living cold.”It is in this kind of sensitivity to detail—to the smallest patterns of detail on a small snake’sback—that the best verse included here exhibits. Small discoveries yield profound insights. William Stafford notices, in the last line of his belated poem “When I Was Young,” that “The clocks, though, still pursue what they endlessly loved.”We, like Stafford, are surprised by the obvious. Not only is the reader startled by the commonplace, and not only asked to see the old in a new way, but to listen differently, too.'),
(19, 'Residual Years', 'Fitch Noel Riley', 230000, 200, 'https://m.media-amazon.com/images/I/51+o3l4zwML._AC_UF1000,1000_QL80_.jpg', 'Ted Kooser reminds us, in telling us “How to Make Rhubarb Wine,” that if you set out to pick a sack of rhubarb, “God knows watch for rattlesnakes/or better, listen; they make a sound/like an old lawn mower rolled downhill.”And finally, Robert Morgan, in “Hubcaps,” defamiliarizes the old images: “The tractor runs over dirt and shapes it, turning/stubble and moving the hill/furrow by furrow to the ter­ races,/slicing clods, wearing/them away and chopping roots/to rot in sweet beds of decay.”Perhaps we’ve noticed this activity many times, but until we read this passage, it is as ifwe had never seen it before. The poems of this anthology express a range of experiences, from loss to anger to despair, from the virtues of honesty and integrity to familial love, in spite of their use of subjects that would at first appear to have little or no worth, like corn picking, or a hog killing, or an Easter colt. By continually demonstrat­ ing that there are indeed universes in grains of sand, the poets here have reminded us of the essential mystery in the light of common day. '),
(20, 'Single Source: The Early Poems Of William Everson [1934-1940]', 'Ford Hugh', 170000, 200, 'https://m.media-amazon.com/images/I/514Qc8vDyFL._AC_UF1000,1000_QL80_.jpg', 'Ted Kooser reminds us, in telling us “How to Make Rhubarb Wine,” that if you set out to pick a sack of rhubarb, “God knows watch for rattlesnakes/or better, listen; they make a sound/like an old lawn mower rolled downhill.”And finally, Robert Morgan, in “Hubcaps,” defamiliarizes the old images: “The tractor runs over dirt and shapes it, turning/stubble and moving the hill/furrow by furrow to the ter­ races,/slicing clods, wearing/them away and chopping roots/to rot in sweet beds of decay.”Perhaps we’ve noticed this activity many times, but until we read this passage, it is as ifwe had never seen it before. The poems of this anthology express a range of experiences, from loss to anger to despair, from the virtues of honesty and integrity to familial love, in spite of their use of subjects that would at first appear to have little or no worth, like corn picking, or a hog killing, or an Easter colt. By continually demonstrat­ ing that there are indeed universes in grains of sand, the poets here have reminded us of the essential mystery in the light of common day.'),
(21, 'Veritable Years: Poems 1949-1966 Volume II Of The Collected Poems', 'Ford James L.', 200000, 200, 'https://m.media-amazon.com/images/I/51yvGHV1B8L._AC_UF350,350_QL50_.jpg', 'The husband and wife live beside the river, and their joining is equated to the joining of the great, continent-scouring river to the Gulf. It is also equated to the joining of animals far up in the sources of the river—the Rocky Mountain crags where the “bighorn ram covers his ewe in a rushing tussle, the loose rock/ Swirls under chipping hooves,”or the “water delled flats”where “the mountain buck springs his start in the doe,/Pine needled earth rucked under his pitch, the rubbed antlers rattling.”But thejoining of the human couple is more than any of these couplings, “For over the bed/Spirit hovers, and in their flesh/ Spirit exults . . .’’To quote these few lines is only to hint at the resonances that infuse the poem but never render it pompous or over-solemn. This sexual union is archetypal and sacramental; it is a syzygy in its root meaning of “a coupling,”and in its...'),
(22, 'Long time coming and a long time come', 'Forte Robert', 150000, 200, 'https://m.media-amazon.com/images/I/81Dh1dKE-5L.jpg', 'Two days after the publication of Been Down So Log It Looks Like Up To Me, Richard Fariña died in a motorcycle accident near Carmel, California. Thus, he never knew of the success of the book, or his recognition as one of the most original and authentic voices of his generation.\r\n\r\nLong Time Coming And A Long Time Gone goes beyond that first novel in range and savage candor. It is a multi-track recording in prose and poetry of highs and lows, bum trips and mind-blasts, and of an odyssey that made the revolutionary scene in Cuba n Ireland, the expatriate scene in London and Paris, the big time folk scene in the U.S., and the human scene every inch of the way.'),
(23, 'William Everson: a collection of books & manuscripts', 'Foster Edward Halsey', 150000, 200, 'https://m.media-amazon.com/images/I/716vZeHvlWL._AC_UF1000,1000_QL80_.jpg', 'First edition, limited to 500 copies, 100 of which are hardbound. With a foreword by Ralph B. Sipper and preface by William Everson. Story of Everson\'s life, his own philosophy plus a 222 item bibliography of his works. x , 53+ 1 pages. stiff paper wrappers.. 8vo..'),
(24, 'Robert Creeley: A Biography', 'Fosdick Gertrude Christian', 150000, 200, 'https://m.media-amazon.com/images/I/41PTGDR3NDL._AC_UF1000,1000_QL80_.jpg', 'In this biography Ekbert Faas pioneers a new kind of \"life-writing.\" It tells its stories through the emotions, thoughts, and, above all, language of the dramatis personae, exchanging the authorial omniscience of traditional biography for an utter fidelity to sources. Allowing for contradictory viewpoints, anecdotes are told and re-told, letting Creeley reveal himself beneath the myths created by self-invention, wishful thinking, and, sometimes, distortion. Excerpts from autobiographical writings by the poet\'s first wife, Ann McKinnon, complete this intriguingly colourful and complex picture.'),
(25, 'Crooked Lines of God: Poems 1949-1954', 'Duxler Margot Beth', 270000, 200, 'https://m.media-amazon.com/images/I/61Txup1MjqL._AC_UF1000,1000_QL80_.jpg', 'The Crooked Lines Of God: Poems, 1949-1954 is a collection of poetry by William Everson, originally published in 1959. The book contains a selection of poems written by the author between the years of 1949 and 1954, during a period of personal and spiritual transformation. The poems explore themes of nature, love, and spirituality, often drawing on Everson\'s experiences as a poet, monk, and lover. The collection is known for its vivid imagery, lyrical language, and deep spiritual insight. The title of the book refers to the idea that God\'s plan for humanity is not always straightforward, and that the path to enlightenment is often full of twists and turns. The Crooked Lines Of God is considered a classic of American poetry, and is widely regarded as one of Everson\'s most important works.This scarce antiquarian book is a facsimile reprint of the old original and may contain some imperfections such as library marks and notations.');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Fiction'),
(2, 'Thriller'),
(3, 'Science'),
(4, 'Horror'),
(5, 'Mystery');

-- --------------------------------------------------------

--
-- Table structure for table `saledetails`
--

CREATE TABLE `saledetails` (
  `id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `saledetails`
--
DELIMITER $$
CREATE TRIGGER `add_book_quantity_saledetails` BEFORE DELETE ON `saledetails` FOR EACH ROW BEGIN
    DECLARE book_quantity INT;


    SELECT quantity INTO book_quantity
    FROM books
    WHERE id = OLD.book_id;

    UPDATE books
    SET quantity = quantity + OLD.quantity
    WHERE id = OLD.book_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `calculate_sum_total` AFTER INSERT ON `saledetails` FOR EACH ROW BEGIN
    DECLARE total FLOAT;

    -- Calculate the total sum for the sale_id from saledetails
    SELECT SUM(b.price * sd.quantity)
    INTO total
    FROM saledetails sd
    JOIN books b ON sd.book_id = b.id
    WHERE sd.sale_id = NEW.sale_id;

    -- Update the sum_total in the sales table
    UPDATE sales
    SET sum_total = total
    WHERE id = NEW.sale_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `minus_book_quantity` AFTER INSERT ON `saledetails` FOR EACH ROW BEGIN
    DECLARE saleQuantity INT;
    DECLARE bookQuantity INT;

    -- Get the quantity of the book sold
    SELECT NEW.quantity INTO saleQuantity;

    -- Get the current quantity of the book in the books table
    SELECT quantity INTO bookQuantity FROM books WHERE id = NEW.book_id;

    -- Update the book quantity in the books table
    UPDATE books SET quantity = bookQuantity - saleQuantity WHERE id = NEW.book_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_sum_total_on_delete` AFTER DELETE ON `saledetails` FOR EACH ROW BEGIN
    DECLARE total FLOAT;

    -- Calculate the total sum for the sale_id from saledetails
    SELECT SUM(b.price * sd.quantity)
    INTO total
    FROM saledetails sd
    JOIN books b ON sd.book_id = b.id
    WHERE sd.sale_id = OLD.sale_id;

    IF total IS NULL THEN
        SET total = 0;
    END IF;

    -- Update the sum_total in the sales table
    UPDATE sales
    SET sum_total = total
    WHERE id = OLD.sale_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_sum_total_on_update` AFTER UPDATE ON `saledetails` FOR EACH ROW BEGIN
    DECLARE total FLOAT;

    -- Calculate the total sum for the sale_id from saledetails
    SELECT SUM(b.price * sd.quantity)
    INTO total
    FROM saledetails sd
    JOIN books b ON sd.book_id = b.id
    WHERE sd.sale_id = NEW.sale_id;

    IF total IS NULL THEN
        SET total = 0;
    END IF;

    -- Update the sum_total in the sales table
    UPDATE sales
    SET sum_total = total
    WHERE id = NEW.sale_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shipping_method` enum('shipping','in_store') NOT NULL,
  `sum_total` float NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `sales`
--
DELIMITER $$
CREATE TRIGGER `delete_related_saleDetails` AFTER DELETE ON `sales` FOR EACH ROW BEGIN
    DELETE FROM saledetails
    WHERE sale_id = OLD.id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `role`, `address`, `phone`) VALUES
(1, 'Long', '12345678', 'long@gmail.com', 'user', NULL, NULL),
(2, 'Admin', '12345678', 'admin@gmail.com', 'admin', NULL, NULL),
(3, 'Huyen', '12345678', 'huyen@gmail.com', 'user', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookgenres`
--
ALTER TABLE `bookgenres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saledetails`
--
ALTER TABLE `saledetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_sale_book_pair` (`sale_id`,`book_id`),
  ADD KEY `sale_id` (`sale_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gmail` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookgenres`
--
ALTER TABLE `bookgenres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `saledetails`
--
ALTER TABLE `saledetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookgenres`
--
ALTER TABLE `bookgenres`
  ADD CONSTRAINT `bookgenres_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookgenres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `saledetails`
--
ALTER TABLE `saledetails`
  ADD CONSTRAINT `saledetails_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `saledetails_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
