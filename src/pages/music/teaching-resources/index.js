import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const markdown = `# Teaching Resources

In addition to the [music blog posts](/music) available on this site, below are free and paid resources that contain instructional information on guitar, songwriting, recording, and more.

## Dave's Lessons on mikesmasterclasses.com

$29.95 each

### Category: Guitar - Jazz / Improvisation

**[How to Harmonically Analyze a Tune](http://www.mikesmasterclasses.com/index.php/How-to-Harmonically-Analyze-a-Tune/Detailed-product-flyer.html)**
In an incredibly detailed 70 minute lesson, David brings you up to speed on chord progressions by presenting harmony principles taught in an introduction music theory class (roman numeral analysis, chord construction, etc) eventually presenting more advanced jazz scale choices and substitutions. Dave demonstrates all of these principles with seven standard jazz tunes, some based on modality and the others based on standard tonality. Modal tunes used are "So What," "All Blues," and "Footprints." Standards used are "Autumn Leaves," "All The Things You Are," "Blue Bossa", and "Honeysuckle Rose." 26 pages of material are prepared in TAB and standard notation. [View Mikes Master Class Lessons Here](http://www.mikesmasterclasses.com/index.php/Product-search.html?keyword=david+cohen)

[**The Major Scale: Chord and Scale Fingering Systems**](http://www.mikesmasterclasses.com/index.php/The-Major-Scale-Chord-and-Scale-Fingering-Systems/Detailed-product-flyer.html)
In this master class aimed at the beginning-intermediate jazz guitarist, a wealth of information is presented that will allow one to visualize the major scale and the chords that belong to it across the entire neck of the guitar. Not only will you be able to see exactly how a great number of chords, voicings, and extensions come from the scale in a visual way, but an exhaustive number of fingering options will be discussed including position playing, 3 notes per string, sliding scales, full range scales and more. [View Mikes Master Class Lessons Here](http://www.mikesmasterclasses.com/index.php/Product-search.html?keyword=david+cohen)

[**The Harmonic and Melodic Minor Scales: Chord and Scale Fingerings**](http://www.mikesmasterclasses.com/index.php/The-Harmonic-and-Melodic-Minor-Scales-Chord-and-Scale-Fingering/Detailed-product-flyer.html)
This lesson discusses how to visualize and play the harmonic and melodic minor scales and the chords that belong to them across the entire neck of the guitar. Included is position playing, a discussion on mode zones, 3 notes-per-string (3 NPS) concepts, sliding scales, full range scales, 1-string, 2-string, and 3-string playing. Also included is a discussion on triads, triad pairs, and triad triples. [View Mikes Master Class Lessons Here](http://www.mikesmasterclasses.com/index.php/Product-search.html?keyword=david+cohen)

[**Blues and Pentatonics – Part I**](http://www.mikesmasterclasses.com/index.php/Blues-and-Pentatonics-Part-I/Detailed-product-flyer.html)
Pentatonic Box Possibilities - Major and Minor 12 Bar Blues - We discuss a number of scale options for playing over the blues, the primary one being the minor pentatonic scale position, or simply "the box." Other approaches include the "diatonic" approach, using appropriate minor pentatonics over each chord, suspended sounds which highlight the 9th and 11th, altered sounds for transitioning, and free chromatic connection. My method of "highlighting/aiming" for scale degrees is discussed in depth so that each new position will sound convincing from the first time you try it. Common turnarounds will be discussed as well. [View Mikes Master Class Lessons Here](http://www.mikesmasterclasses.com/index.php/Product-search.html?keyword=david+cohen)

[**Blues and Pentatonics - Part II**](http://www.mikesmasterclasses.com/index.php/Blues-and-Pentatonics-Part-II/Detailed-product-flyer.html)
In this lesson, which is a second part in a series on blues and pentatonics, we are going to take a step-by-step approach to playing every position of the pentatonic scale in every key. Included is an in-depth discussion on playing each of the five barre chord shapes and the general method behind finding where they are on the fretboard. Also how to play the scale and visualize it within the chord shape. We are also going to explore the five possibilities of changing between the three chords of the twelve bar blues in the same position. [View Mikes Master Class Lessons Here](http://www.mikesmasterclasses.com/index.php/Product-search.html?keyword=david+cohen)

## YouTube Videos and PDF

[See All Videos in Channel](https://www.youtube.com/user/scraggo/videos)

### Category: Guitar - Jazz Repertoire and Improvisation

**[So What Beginner Jazz Lesson Miles Davis Dorian Licks](https://www.youtube.com/watch?v=4L-Z86mlx60)** We discuss how to play the jazz tune "So What," how to play the D and Eb Dorian modes, and how to improvise within those positions. This incredibly popular YouTube lesson also has an accompanying lesson PDF.

**[Beginner Jazz Guitar Basic Shell Chord Voicings using Autumn Leaves](https://www.youtube.com/watch?v=5jaMYQIPa_Q)** In this lesson, using the jazz standard Autumn Leaves, I explore basic shell voicings which are simple on the hands, make jazz tensions possible, and promote mobility across the guitar neck. These are either Root, 3rd, 7th voicings (if the 5th string is the root) or Root, 7th, 3rd voicings (if the 6th string is the root).

### Category: Guitar Warmups

**[Guitar Warmup - String Skipping and Stretching](https://www.youtube.com/watch?v=46EwN4nsuSY)** This guitar warmup includes the working of all combinations of the 4 left hand fingers, stretches, and inside/outside picking with string skips. It's a doozy - hope you enjoy. It is recommended for intermediate to advanced players.
`;

export default () => {
  return (
    <Layout>
      <SEO title="Music Teaching Resources" />
      <div className="text-wrapper">
        <ReactMarkdown source={markdown} />
      </div>
    </Layout>
  );
};
