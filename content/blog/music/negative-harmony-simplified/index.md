---
type: post
title: 'Negative Harmony Simplified'
date: '2024-12-01'
author: 'Dave Cohen'
categories: ['music']
tags: ['music theory', 'songwriting']
---

- [TL;DR: Negative Harmony Simplified](#tldr-negative-harmony-simplified)

## TL;DR: Negative Harmony Simplified

**Negative Harmony is a major <-> minor tonality flip resulting from transposing inverted (reflected) notes up a perfect 5th**.

The formula for negative harmony is usually presented as _inverting over a b3 / 3 axis_ (that is, mirroring/reflecting over an axis between the minor 3rd and major 3rd of a key.)

A more straightforward way of arriving at this is a two-step process:

1. Invert all notes (both melody and harmony) over the tonic axis
2. Transpose the notes up a perfect 5th

Discovering this simpler procedure revealed to me the _reason_ notes are reflected over the b3 / 3 axis. Simply reflecting over the tonic of a major key without transposing puts us in a minor key with a tonic a 5th below the tonic. (This is the _parallel Phrygian_ mode.) Transposing up a perfect 5th adjusts it so the reflected notes are all in the parallel _Minor_ (Aeolian) mode. That's how we get the major <-> minor tonality flip - we adjust the reflected notes so that we get the same tonic note (which is what is meant by _parallel_ modality.)

Because there are other ways of inverting and transposing melodies, we should probably call this operation "Parallel Negative Harmony." We'll see how to get "Relative Negative Harmony" as well.

Let's dive into the music theory concepts that comprise Negative Harmony to better understand how to arrive at it.

## Melodic Inversion

To begin, let's look at how to _invert_ a melody. We'll take each note of a succession of individual notes and go through the following procedure:

If a note goes _up_ by a certain interval, instead go _down_ by that same interval, and vice versa.

From [Melodic Inversion - Wikipedia](https://en.wikipedia.org/wiki/Inversion_(music)#Melodies):

> A melody is inverted by flipping it "upside-down", reversing the melody's contour. For instance, if the original melody has a rising major third, then the inverted melody has a falling major third

We can invert a melody "over" a note - the first note of the melody, the tonic note, or any of your choosing. To keep things simple, let's choose the tonic note as our _pitch axis_. From [Jazz Theory - Inversion - Wikipedia](https://en.wikipedia.org/wiki/Inversion_(music)#Jazz_theory)

> a pitch axis is the center around which a melody is inverted.

I think of this process as "mirroring" or "reflecting" over an interval. Here's a simple example where you can see the reversal of the melody's contour:

(img)

Let's see the unison mirror represented as a table. The top row shows the notes ascending chromatically from our chosen tonic (C) and the bottom row shows which note is _mirrored by_ (a.k.a _reflected over_) the note above:

## Unison Mirror

| C | C#/Db | D | D#/Eb | E | F | F#/Gb |
|-|-|-|-|-|-|-|
| C | B | A#/Bb | A | G#/Ab | G | F#/Gb |

Let's look at only the notes in the C major scale:

| C | D | E | F | G | A | B |
|-|-|-|-|-|-|-|
| C | Bb | Ab | G | F | Eb | Db |

Here we see that **C major (Ionian) reflected over the tonic axis is C Phrygian**. Importantly, the closest _relative_ relationship of C Phrygian to C major is bVI major (Ab) and iv minor (F minor.)

Back to mirroring. We could opt to mirror a note over a different interval. Let's try mirroring the tonic to a minor second (half-step) above:

## Minor-Second (Half-Step) Mirror

| C | C#/Db | D | D#/Eb | E | F | F#/Gb |
|-|-|-|-|-|-|-|
| C#/Db | C | B | A#/Bb | A | G#/Ab | G |

This has a special, if somewhat unfulfilling, quality: there isn't a unison - no note reflects to itself.

If we attempt to mirror over a major 2nd, we find that it's _identical to mirroring over a unison_ (albeit, of a different tonic note). How can that be? Well if you look at the unison chart, we find major 2nds already represented: C#/Db corresponding with B (major 2nd) and D corresponding with A#/Bb (also a major 2nd.)

Because no intervals have been excluded above, _there are only two mirrors_. When you can't transpose theoretical structures along all 12 chromatic notes, they are considered to have _limited transposition_ (Read more about this concept: [Mode of limited transposition - Wikipedia](https://en.wikipedia.org/wiki/Mode_of_limited_transposition) ).

Briefly, here are all the equivalents:

- Unison = Major 2nd = Major 3 = Tritone = Minor 6 = Minor 7 = Perfect Octave
- Minor 2nd = Minor 3 = Perfect 4th = Perfect 5th = Major 6 = Major 7

## Harmonic Inversion

Let's go back to the unison mirror and reflect all the triads of the C major scale. Let's start with the tonic triad, C major:

- C (root) reflects to itself - C
- E (M3) reflects to Ab (a M3 _below_ C)
- G (P5) reflects to F (a P5 _below_ C)

In short: C-E-G -> C-Ab-F

Shuffling the resulting notes, we get F Ab C, an F minor triad. As we saw above, the C major scale inverted is the F minor scale, so we see consistency: the inversion of the C major triad is F minor.

Let's see the all the diatonic triads inverted:

| C | Dm | Em | F | G | Am | Bdim |
|-|-|-|-|-|-|-|
| Fm | Eb | Db | Cm | Bbm | Ab | Gdim |

(example melody and simple chord progression.)

## Negative Harmony: up a 5th

That's well and good, but wouldn't it be nice if there was a more direct relationship of an original piece to its inverted piece? Perhaps, going from major to the _parallel_ minor? (Remember: _parallel_ modes share the same tonic note.) For example: C major becoming C minor.

Fortunately, the answer is simple: **transpose all the notes up a perfect 5th to go from F minor to C minor**:

- F -> C
- G -> D
- Ab -> Eb
- and so on. (to table)

**This is negative harmony.** It's a simple transposition to get to this parallel minor/major relationship.

(table: harmony)

## Revisiting the Minor-Second (Half-Step) Mirror

If we rearrange the above negative harmony note-mapping, we get this mirror:

| A#/Bb |B | C | C#/Db | D | D#/Eb |
|-|-|-|-|-|-|
| A | G#/Ab | G | F#/Gb | F | E |

It's either a unison or half-step mirror - can you tell which one it is?

Since there aren't any unisons (notes mapped to themselves), and we see D#/Eb mapped to E (and vice versa) and A#/Bb mapped to A (and vice versa), it's the half-step mirror.

Great job if you got it!

There are a bunch of procedures commonly cited to derive negative harmony. The "reflect over the b3 / 3 axis" one applies here, but it's only half the story. You can also "reflect over the b6 / 6 axis". It's equivalent because the half-step mirror contains both half-steps.

## Relative Negative Harmony

Since the above procedure gives us a _parallel_ major to minor (and vice versa) interchange, we could give it a more official name: Parallel Negative Harmony.

I'd argue that since there's the possibility of arriving at another useful "version" of negative harmony, _Relative Negative Harmony_, the distinction is useful.

Deriving Relative Negative Harmony is just as simple as Parallel Negative Harmony. We simply transpose up a major 3rd instead of a perfect 5th after inverting.

Let's look at going from C major to A minor (major to _relative_ minor).

- Melodic reflection over tonic, transposed up a major 3rd
  - Equivalent to reflecting over a unison mirror on the 2nd scale degree
- Diatonic triads: C <-> Am, Dm <-> G, Em <-> F, Bdim <-> Bdim

## Where Next?

My goal was to clarify the "why" of negative harmony. There are a lot of great resources with examples of deriving the _parallel_ version and using it in compositions.

Going from here, I encourage you to explore the _relative_ version. Maybe you can even find some other useful procedures. For instance, is there a similar procedure to go from Major to Lydian or some other non-minor mode? I'd love to know if you discover something like that.

<style>
  .hi {
    color: red;
  }
</style>

asdf

<div class="hi">red?</div>
