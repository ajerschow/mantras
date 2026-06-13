// Data model for each mantra:
// {
//   id, title, deity, tags,
//   sanskrit: { script, transliteration, words: [{word, gloss, note}], translation, grammar: [{form, analysis}] },
//   tibetan: {
//     script, wylie, phonetic, translation, scriptType: "sanskrit-in-tibetan" | "native-tibetan",
//     intro, syllables: [{tib, wylie, phon, note}], wordGrouping
//   }
// }

export const mantras = [
  {
    id: "om-mani-padme-hum",
    title: "Oṃ Maṇi Padme Hūṃ",
    deity: "Avalokiteśvara / Chenrezig (Bodhisattva of Compassion)",
    tags: ["compassion", "core mantra", "six syllables"],
    sanskrit: {
      script: "ॐ मणि पद्मे हूँ",
      transliteration: "oṃ maṇi padme hūṃ",
      translation:
        "Oṃ, O Jewel-Lotus One, hūṃ! (Traditionally rendered \"the jewel in the lotus\", but more accurately an address to the bodhisattva as the one whose attribute is the jewel-lotus.)",
      words: [
        {
          word: "oṃ",
          gloss: "sacred syllable",
          note:
            "The praṇava, often analysed as a contraction of the sounds a + u + m, said to represent the totality of sound/being and the three kāyas (bodies of a Buddha). Not a 'word' with ordinary meaning — it opens almost every mantra.",
          grammar:
            "Indeclinable sacred particle (praṇava); not assigned to a part of speech in classical grammar."
        },
        {
          word: "maṇi-padme",
          gloss: "jewel-lotus (vocative)",
          note:
            "No sandhi (vowel-clash) occurs here because maṇi ends in -i and padme begins with p-, so the words simply stand side by side as a compound. Two readings are current: (1) maṇipadma is a bahuvrīhi ('possessive') compound, 'the one whose jewel is the lotus' / 'jewel-lotus one', here in the vocative case addressing Avalokiteśvara (or his consort) — maṇipadme; (2) maṇi 'jewel' (nominative) + padme, the locative singular of padma 'lotus', i.e. 'the jewel (is) in the lotus'. Most specialists (e.g. Studholme) favour reading (1).",
          grammar:
            "Compound noun, vocative singular. If analysed as a bahuvrīhi the underlying stem is feminine ā-stem maṇipadmā ('jewel-lotus[-holder]'); feminine ā-stems form the vocative singular by replacing final -ā with short -e, giving maṇipadme. Alternatively, if taken as maṇi (nom. sg. masc., 'jewel') + padme, the latter is the locative singular of the neuter/masculine a-stem noun padma ('lotus'); a-stem locative singular = stem + -e."
        },
        {
          word: "hūṃ",
          gloss: "seed syllable (bīja)",
          note:
            "A non-lexical 'seed syllable' associated with the mind/wisdom aspect of enlightenment. It has no dictionary meaning; it functions to 'seal' or energise the mantra.",
          grammar:
            "Seed syllable (bīja); grammatically an interjection/indeclinable, outside normal declension."
        }
      ]
    },
    tibetan: {
      script: "ༀ་མ་ཎི་པདྨེ་ཧཱུྂ།",
      wylie: "oM ma Ni pad+me hU~M",
      phonetic: "Om Mani Pe-me Hung",
      translation: "Same meaning as the Sanskrit (see above) — this is the Sanskrit mantra spelled out using Tibetan letters.",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "This is not a Tibetan sentence — it is the Sanskrit mantra written with Tibetan letters in a special 'Sanskrit spelling' mode. In this mode the normal Tibetan reading rules (silent prefixes/suffixes that shift tone or vowel quality, explained below for a genuinely Tibetan phrase) do NOT apply. Instead, extra letters (retroflexes ṇa/ṭa, stacked consonant clusters, the anusvāra ṃ, the visarga ḥ, long-vowel signs) are used purely to reproduce the original Sanskrit sounds as closely as Tibetan script allows.",
      words: [
        {
          script: "ༀ",
          wylie: "oM",
          phon: "Om",
          gloss: "sacred syllable (oṃ)",
          syllables: [
            {
              tib: "ༀ",
              wylie: "oM",
              phon: "Om",
              note:
                "A single dedicated ligature-letter that exists only to write the syllable Oṃ — a fusion of the vowel-carrier ཨ (a), the o-vowel sign, and the anusvāra Ṿ (ṃ, nasalisation, written here as the small circle). Read exactly as in Sanskrit: 'Om'. The following syllable (མ, 'ma') begins with a plain consonant, so nothing here is altered by what comes next."
            }
          ]
        },
        {
          script: "མ་ཎི་པདྨེ",
          wylie: "ma Ni pad+me",
          phon: "ma-ni pe-me / pad-me",
          gloss: "maṇipadme — 'jewel-lotus' (vocative)",
          syllables: [
            {
              tib: "མ",
              wylie: "ma",
              phon: "ma",
              note:
                "Plain root letter མ (MA) with its inherent vowel 'a' (no vowel sign needed). མ is one of the Tibetan 'low/soft' (resonant) consonants, so on its own it carries low register — but since this whole mantra is read in Sanskrit-spelling mode, it is simply pronounced 'ma'. The next syllable ཎི begins with the retroflex letter ཎ, which does not change the sound of this syllable."
            },
            {
              tib: "ཎི",
              wylie: "Ni",
              phon: "ni",
              note:
                "ཎ is the Tibetan letter for the Sanskrit retroflex ṇa — a sound not used in native Tibetan words, borrowed solely to transcribe Sanskrit. The vowel sign ི ('gigu') above it gives the vowel 'i'. Tibetans normally do not distinguish retroflex ṇ from dental n, so it is pronounced simply 'ni'. It is read straight into the following པདྨེ with no elision or sound change."
            },
            {
              tib: "པདྨེ",
              wylie: "pad+me",
              phon: "pe-me / pad-me",
              note:
                "A single syllable block built from a consonant stack: root letter པ (pa) with ད (da) and མ (ma) subjoined beneath it, reproducing the Sanskrit conjunct consonant 'dm' in padma, plus the vowel sign ེ (e) on top. Read in full Sanskrit style this is 'pad-me'; in everyday Tibetan recitation the cluster is often simplified and the syllable is pronounced 'pe-me' or 'pé'. As the last syllable of maṇipadme it is followed by ཧཱུྂ (hūṃ), which does not affect its pronunciation."
            }
          ]
        },
        {
          script: "ཧཱུྂ",
          wylie: "hU~M",
          phon: "Hung",
          gloss: "seed syllable (hūṃ)",
          syllables: [
            {
              tib: "ཧཱུྂ",
              wylie: "hU~M",
              phon: "Hung",
              note:
                "Root letter ཧ (ha) with the long-vowel sign ཱ (ā-chen) combined with the short ུ (u) sign to give the long vowel 'ū', plus the anusvāra ྂ (ṃ) on top for the final nasal. Together: 'hūṃ'. In Tibetan chanting this is conventionally pronounced 'Hung'. It is the final syllable of the mantra, so there is no following syllable to affect it."
            }
          ]
        }
      ],
      wordGrouping:
        "The six 'syllables' of the popular name correspond to the Tibetan syllable-blocks Om / Ma / Ni / Pad-me / Hung — but linguistically these group into the three Sanskrit units oṃ | maṇipadme | hūṃ, with 'maṇipadme' itself spanning two Tibetan blocks (ma-ṇi and pad-me) that together form one compound word."
    }
  },

  {
    id: "om-tare-tuttare-ture-soha",
    title: "Oṃ Tāre Tuttāre Ture Svāhā",
    deity: "Ārya Tārā / Green Tārā (Saviouress, swift protector)",
    tags: ["protection", "swift action", "Tārā"],
    sanskrit: {
      script: "ॐ तारे तुत्तारे तुरे स्वाहा",
      transliteration: "oṃ tāre tuttāre ture svāhā",
      translation:
        "Oṃ Tārā, O Tārā who liberates swiftly, O swift and supreme one, svāhā (hail / may it be so)!",
      words: [
        {
          word: "oṃ",
          gloss: "sacred syllable",
          note: "See note under Om Mani Padme Hum — the praṇava that opens the mantra.",
          grammar:
            "Indeclinable sacred particle (praṇava); not assigned to a part of speech in classical grammar."
        },
        {
          word: "tāre",
          gloss: "O Tārā! (vocative)",
          note:
            "Vocative singular of the feminine name Tārā ('Star' / 'She who ferries across' / 'Saviouress'). No sandhi with the preceding oṃ is made because mantric Sanskrit treats oṃ as a separate exclamatory unit.",
          grammar:
            "Vocative singular of the feminine ā-stem noun tārā. The regular rule for feminine ā-stems is: vocative singular = stem with final -ā shortened to -e (tārā → tāre), exactly parallel to maṇipadme in Om Mani Padme Hum."
        },
        {
          word: "tuttāre",
          gloss: "O swift-saving one! (vocative)",
          note:
            "Vocative of an intensified form tuttārā, built by reduplicating the first syllable of tārā (tā- → tu-tt-ā-), a Sanskrit word-formation device (reduplication) used here to intensify the meaning: 'she who liberates quickly/repeatedly'.",
          grammar:
            "Vocative singular of the feminine ā-stem noun tuttārā (final -ā → -e, as with tāre). The stem itself is formed by reduplication of tā- (→ tu-ttā-), a derivational process normally used for intensives/frequentatives of verb roots, here applied to a name to create an intensified epithet ('she who saves again and again / very swiftly')."
        },
        {
          word: "ture",
          gloss: "O swift/supreme one! (vocative)",
          note:
            "Vocative of the feminine adjective turā, 'swift, going quickly, pre-eminent' — a third epithet emphasising speed and power.",
          grammar:
            "Vocative singular of the feminine ā-stem adjective turā (final -ā → -e, as with tāre and tuttāre)."
        },
        {
          word: "svāhā",
          gloss: "hail! / so be it",
          note:
            "A fixed ritual exclamation that closes Vedic and tantric offering-mantras, traditionally said to invoke the offering-goddess Svāhā and to 'seal' the offering. Sometimes folk-analysed as su- ('well') + āhā ('it has been said/offered').",
          grammar:
            "Indeclinable ritual interjection (nipāta); does not inflect and stands outside the case system."
        }
      ]
    },
    tibetan: {
      script: "ༀ་ཏཱ་རེ་ཏུཏྟཱ་རེ་ཏུ་རེ་སྭཱ་ཧཱ།",
      wylie: "oM tA re tut tA re tu re swA hA",
      phonetic: "Om Tare Tuttare Ture Soha",
      translation: "Same as Sanskrit above — this is the Sanskrit mantra spelled with Tibetan letters.",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "As with Om Mani Padme Hum, this is Sanskrit written in Tibetan 'Sanskrit-spelling' mode, so silent prefixes/suffixes and Tibetan tone rules do not apply — every letter is read close to its Sanskrit value.",
      words: [
        {
          script: "ༀ",
          wylie: "oM",
          phon: "Om",
          gloss: "sacred syllable (oṃ)",
          syllables: [
            { tib: "ༀ", wylie: "oM", phon: "Om", note: "The Oṃ ligature, as in Om Mani Padme Hum. The following syllable ཏཱ begins with a plain ཏ, so nothing here is altered by what follows." }
          ]
        },
        {
          script: "ཏཱ་རེ",
          wylie: "tA re",
          phon: "tā-re",
          gloss: "tāre — 'O Tārā!' (vocative)",
          syllables: [
            {
              tib: "ཏཱ",
              wylie: "tA",
              phon: "tā",
              note: "Root letter ཏ (ta) plus the long-vowel sign ཱ (a-chen), giving the long vowel 'ā': 'tā'. The following རེ begins with ར, which does not change this syllable's sound."
            },
            {
              tib: "རེ",
              wylie: "re",
              phon: "re",
              note: "Root letter ར (ra) with the vowel sign ེ (e): 're'. This closes the word tāre; the next word begins with ཏུཏྟཱ, which has no effect on this syllable."
            }
          ]
        },
        {
          script: "ཏུཏྟཱ་རེ",
          wylie: "tut tA re",
          phon: "tut-tā-re",
          gloss: "tuttāre — 'O swift-saving one!' (vocative)",
          syllables: [
            {
              tib: "ཏུཏྟཱ",
              wylie: "tut tA",
              phon: "tut-tā",
              note:
                "A two-part syllable block: ཏུ (ta + vowel sign ུ 'u' = 'tu') is followed in the same block by ྟ, a subjoined second 'ta' carrying the long vowel ཱ. This stacked cluster reproduces the Sanskrit double consonant 'tt' in tuttārā, giving 'tut-tā'. The following རེ begins with ར and does not alter this syllable."
            },
            {
              tib: "རེ",
              wylie: "re",
              phon: "re",
              note: "Same as the re in tāre: root letter ར with vowel sign ེ = 're'. Closes tuttāre; the next word ཏུ་རེ begins with plain ཏ, with no effect here."
            }
          ]
        },
        {
          script: "ཏུ་རེ",
          wylie: "tu re",
          phon: "tu-re",
          gloss: "ture — 'O swift/supreme one!' (vocative)",
          syllables: [
            {
              tib: "ཏུ",
              wylie: "tu",
              phon: "tu",
              note: "Root letter ཏ (ta) with vowel sign ུ (u): 'tu'. The following རེ begins with ར and leaves this syllable unchanged."
            },
            {
              tib: "རེ",
              wylie: "re",
              phon: "re",
              note: "Root letter ར (ra) with vowel sign ེ (e): 're'. Closes ture; the next word སྭཱ་ཧཱ begins with the cluster སྭ, which has no effect on this syllable."
            }
          ]
        },
        {
          script: "སྭཱ་ཧཱ",
          wylie: "swA hA",
          phon: "svā-hā",
          gloss: "svāhā — 'hail! / so be it'",
          syllables: [
            {
              tib: "སྭཱ",
              wylie: "swA",
              phon: "svā",
              note:
                "Root letter ས (sa) with ཝ (wa, used to represent Sanskrit 'v') subjoined beneath it, plus the long vowel sign ཱ — reproduces the Sanskrit cluster 'sv' + long ā: 'svā'. The following ཧཱ begins with ཧ and does not change this syllable's sound."
            },
            {
              tib: "ཧཱ",
              wylie: "hA",
              phon: "hā",
              note: "Root letter ཧ (ha) with the long-vowel sign ཱ: 'hā'. This is the final syllable of the mantra, so there is no following syllable to affect it."
            }
          ]
        }
      ],
      wordGrouping:
        "Nine Tibetan syllable-blocks group into the five Sanskrit words: Om | Tā-re | Tut-tā-re | Tu-re | Svā-hā. Note how 'Tuttare' and 'Soha' (svāhā) each span two Tibetan blocks even though they are single Sanskrit words."
    }
  },

  {
    id: "white-tara-mantra",
    title: "Oṃ Tāre Tuttāre Ture Mama Āyu Puṇya Jñāna Puṣṭiṃ Kuru Svāhā",
    deity: "Sitatārā / White Tārā (long-life, healing and compassion)",
    tags: ["long life", "healing", "merit", "Tārā"],
    sanskrit: {
      script: "ॐ तारे तुत्तारे तुरे मम आयुपुण्यज्ञानपुष्टिं कुरु स्वाहा",
      transliteration: "oṃ tāre tuttāre ture mama āyu-puṇya-jñāna-puṣṭiṃ kuru svāhā",
      translation:
        "Oṃ Tārā, O Tārā who liberates swiftly, O swift and supreme one! Increase my lifespan, merit, and wisdom — svāhā!",
      words: [
        {
          word: "oṃ",
          gloss: "sacred syllable",
          note: "See note under Om Mani Padme Hum — the praṇava that opens the mantra.",
          grammar:
            "Indeclinable sacred particle (praṇava); not assigned to a part of speech in classical grammar."
        },
        {
          word: "tāre",
          gloss: "O Tārā! (vocative)",
          note:
            "Vocative singular of the feminine name Tārā ('Star' / 'She who ferries across' / 'Saviouress'). No sandhi with the preceding oṃ is made because mantric Sanskrit treats oṃ as a separate exclamatory unit.",
          grammar:
            "Vocative singular of the feminine ā-stem noun tārā. The regular rule for feminine ā-stems is: vocative singular = stem with final -ā shortened to -e (tārā → tāre), exactly parallel to maṇipadme in Om Mani Padme Hum."
        },
        {
          word: "tuttāre",
          gloss: "O swift-saving one! (vocative)",
          note:
            "Vocative of an intensified form tuttārā, built by reduplicating the first syllable of tārā (tā- → tu-tt-ā-), a Sanskrit word-formation device (reduplication) used here to intensify the meaning: 'she who liberates quickly/repeatedly'.",
          grammar:
            "Vocative singular of the feminine ā-stem noun tuttārā (final -ā → -e, as with tāre). The stem itself is formed by reduplication of tā- (→ tu-ttā-), a derivational process normally used for intensives/frequentatives of verb roots, here applied to a name to create an intensified epithet ('she who saves again and again / very swiftly')."
        },
        {
          word: "ture",
          gloss: "O swift/supreme one! (vocative)",
          note:
            "Vocative of the feminine adjective turā, 'swift, going quickly, pre-eminent' — a third epithet emphasising speed and power.",
          grammar:
            "Vocative singular of the feminine ā-stem adjective turā (final -ā → -e, as with tāre and tuttāre)."
        },
        {
          word: "mama",
          gloss: "my / of mine",
          note:
            "The genitive pronoun that turns the rest of the line into a personal petition: 'increase MY lifespan, merit, and wisdom'. This is the point where the mantra shifts from praising Tārā (vocatives ending in -e) to asking for a specific benefit for the practitioner.",
          grammar:
            "Genitive singular of the first-person pronoun aham ('I'); the stem mad- takes the genitive ending -ama, giving mama, 'of me / my' (cf. English 'mine')."
        },
        {
          word: "āyu-puṇya-jñāna-puṣṭiṃ",
          gloss: "increase of (my) lifespan, merit, and wisdom",
          note:
            "A four-member compound (samāhāra-dvandva) listing the things to be increased — āyu 'lifespan', puṇya 'merit', jñāna 'wisdom' — with puṣṭi 'increase, growth, nourishment' as the head noun that the whole compound names. Sandhi: the independent noun āyus ('life') loses its final -s when it stands as the first member of a compound, surfacing as āyu- before the following consonant (āyus + puṇya → āyu-puṇya...).",
          grammar:
            "Accusative singular of the feminine i-stem noun puṣṭi (puṣṭi + -m → puṣṭiṃ before k-, by anusvāra sandhi), functioning as the direct object of the imperative kuru: 'make/produce an increase (of)...'. āyu, puṇya, and jñāna are bare compound-stems (no case endings of their own) standing as the first three members of the compound, all logically 'increased' along with puṣṭi."
        },
        {
          word: "kuru",
          gloss: "make! / do! (imperative)",
          note:
            "The command verb of the petition: 'make/cause (this increase)!'. Addressed to Tārā, asking her to bring about the increase named by the preceding compound.",
          grammar:
            "2nd person singular imperative of the verbal root √kṛ ('to do, make'), present class 8 (kr̥-/kuru- stem): kuru, 'do! / make!' — the same form found in the Vajrasattva mantra (e.g. dr̥ḍho me bhava — similar imperative register)."
        },
        {
          word: "svāhā",
          gloss: "hail! / so be it",
          note:
            "A fixed ritual exclamation that closes Vedic and tantric offering-mantras, traditionally said to invoke the offering-goddess Svāhā and to 'seal' the offering. Sometimes folk-analysed as su- ('well') + āhā ('it has been said/offered').",
          grammar:
            "Indeclinable ritual interjection (nipāta); does not inflect and stands outside the case system."
        }
      ]
    },
    tibetan: {
      script: "ༀ་ཏཱ་རེ་ཏུཏྟཱ་རེ་ཏུ་རེ་མ་མ་ཨ་ཡུ་པུཎྱ་ཛྙཱ་ན་པུཥྚིཾ་ཀུ་རུ་སྭཱ་ཧཱ།",
      wylie: "oM tA re tut tA re tu re ma ma a yu puNya dz+nyA na pu Sh+tiM ku ru swA hA",
      phonetic: "Om Tare Tuttare Ture Mama Ayu Punya Dzana Pushtim Kuru Soha",
      translation: "Same as Sanskrit above — this is the Sanskrit mantra spelled with Tibetan letters.",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "As with Om Tare Tuttare Ture Soha (Green Tārā), this is Sanskrit written in Tibetan 'Sanskrit-spelling' mode, so silent prefixes/suffixes and Tibetan tone rules do not apply — every letter is read close to its Sanskrit value. This long-life mantra simply continues the Green Tārā mantra with an added petition for life, merit, and wisdom.",
      words: [
        {
          script: "ༀ",
          wylie: "oM",
          phon: "Om",
          gloss: "sacred syllable (oṃ)",
          syllables: [
            { tib: "ༀ", wylie: "oM", phon: "Om", note: "The Oṃ ligature, as in Om Mani Padme Hum. The following syllable ཏཱ begins with a plain ཏ, so nothing here is altered by what follows." }
          ]
        },
        {
          script: "ཏཱ་རེ",
          wylie: "tA re",
          phon: "tā-re",
          gloss: "tāre — 'O Tārā!' (vocative)",
          syllables: [
            {
              tib: "ཏཱ",
              wylie: "tA",
              phon: "tā",
              note: "Root letter ཏ (ta) plus the long-vowel sign ཱ (a-chen), giving the long vowel 'ā': 'tā'. The following རེ begins with ར, which does not change this syllable's sound."
            },
            {
              tib: "རེ",
              wylie: "re",
              phon: "re",
              note: "Root letter ར (ra) with the vowel sign ེ (e): 're'. This closes the word tāre; the next word begins with ཏུཏྟཱ, which has no effect on this syllable."
            }
          ]
        },
        {
          script: "ཏུཏྟཱ་རེ",
          wylie: "tut tA re",
          phon: "tut-tā-re",
          gloss: "tuttāre — 'O swift-saving one!' (vocative)",
          syllables: [
            {
              tib: "ཏུཏྟཱ",
              wylie: "tut tA",
              phon: "tut-tā",
              note:
                "A two-part syllable block: ཏུ (ta + vowel sign ུ 'u' = 'tu') is followed in the same block by ྟ, a subjoined second 'ta' carrying the long vowel ཱ. This stacked cluster reproduces the Sanskrit double consonant 'tt' in tuttārā, giving 'tut-tā'. The following རེ begins with ར and does not alter this syllable."
            },
            {
              tib: "རེ",
              wylie: "re",
              phon: "re",
              note: "Same as the re in tāre: root letter ར with vowel sign ེ = 're'. Closes tuttāre; the next word ཏུ་རེ begins with plain ཏ, with no effect here."
            }
          ]
        },
        {
          script: "ཏུ་རེ",
          wylie: "tu re",
          phon: "tu-re",
          gloss: "ture — 'O swift/supreme one!' (vocative)",
          syllables: [
            {
              tib: "ཏུ",
              wylie: "tu",
              phon: "tu",
              note: "Root letter ཏ (ta) with vowel sign ུ (u): 'tu'. The following རེ begins with ར and leaves this syllable unchanged."
            },
            {
              tib: "རེ",
              wylie: "re",
              phon: "re",
              note: "Root letter ར (ra) with vowel sign ེ (e): 're'. Closes ture; the next word མ་མ begins with མ, which has no effect on this syllable."
            }
          ]
        },
        {
          script: "མ་མ",
          wylie: "ma ma",
          phon: "ma-ma",
          gloss: "mama — 'my / of mine'",
          syllables: [
            {
              tib: "མ",
              wylie: "ma",
              phon: "ma",
              note: "Root letter མ (ma) with its inherent vowel 'a': 'ma'. The following syllable is an identical repeated མ, which does not change this syllable's sound."
            },
            {
              tib: "མ",
              wylie: "ma",
              phon: "ma",
              note: "A second, identical root letter མ (ma) with inherent vowel 'a': 'ma'. Together the two blocks spell 'mama', the genitive 'my'. The following syllable ཨ begins with the vowel-carrier ཨ, which does not change this syllable's sound (the two are read as separate syllables, not joined)."
            }
          ]
        },
        {
          script: "ཨ་ཡུ་པུཎྱ",
          wylie: "a yu puNya",
          phon: "ā-yu-pu-ṇya",
          gloss: "āyu-puṇya — 'lifespan (and) merit'",
          syllables: [
            {
              tib: "ཨ",
              wylie: "a",
              phon: "ā",
              note: "The vowel-carrier letter ཨ (a-chung), used to write a vowel that does not follow a consonant. Read long as 'ā' here (beginning of āyu, 'lifespan'). The following ཡུ begins with ཡ, which does not change this syllable's sound."
            },
            {
              tib: "ཡུ",
              wylie: "yu",
              phon: "yu",
              note: "Root letter ཡ (ya) with the vowel sign ུ (u): 'yu'. Combined with the preceding ཨ, this spells āyu, 'life, lifespan'. The following པུ begins with པ, which does not change this syllable's sound."
            },
            {
              tib: "པུ",
              wylie: "pu",
              phon: "pu",
              note: "Root letter པ (pa) with the vowel sign ུ (u): 'pu'. Begins puṇya, 'merit, virtue'. The following ཎྱ is part of the same word and does not change this syllable's sound."
            },
            {
              tib: "ཎྱ",
              wylie: "Nya",
              phon: "ṇya",
              note: "The retroflex root letter ཎ (ṇa) — a sound found only in Sanskrit loanwords, made with the tongue curled back against the roof of the mouth — with the semivowel ྱ (ya) subjoined beneath it, giving the cluster 'ṇya'. Combined with the preceding pu, this spells puṇya, 'merit'. The following word ཛྙཱ་ན begins with the conjunct ཛྙ, which does not change this syllable's sound."
            }
          ]
        },
        {
          script: "ཛྙཱ་ན",
          wylie: "dz+nyA na",
          phon: "jñā-na",
          gloss: "jñāna — 'wisdom, knowledge'",
          syllables: [
            {
              tib: "ཛྙཱ",
              wylie: "dz+nyA",
              phon: "jñā",
              note: "Root letter ཛ (ja, pronounced 'dza') with the semivowel ྙ (nya) subjoined beneath it and the long-vowel sign ཱ on top — together reproducing the Sanskrit conjunct cluster 'jñā', a sound-combination foreign to native Tibetan and pronounced close to 'dzñā' or simplified to 'jā'/'dzā' in chanting. The following ན begins with plain ན, which does not change this syllable's sound."
            },
            {
              tib: "ན",
              wylie: "na",
              phon: "na",
              note: "Root letter ན (na) with its inherent vowel 'a': 'na'. Combined with the preceding jñā, this spells jñāna, 'wisdom, knowledge'. The following word པུཥྚིཾ begins with པ, which does not change this syllable's sound."
            }
          ]
        },
        {
          script: "པུཥྚིཾ",
          wylie: "pu Sh+tiM",
          phon: "puṣ-ṭiṃ",
          gloss: "puṣṭiṃ — 'increase, growth' (accusative; object of kuru)",
          syllables: [
            {
              tib: "པུཥྚིཾ",
              wylie: "pu Sh+tiM",
              phon: "puṣṭiṃ",
              note:
                "A single syllable block built from several stacked elements: root letter པ (pa) with vowel sign ུ (u) gives 'pu'; below it, the retroflex letters ཥ (ṣa) and ཏ (ta) are stacked together to reproduce the Sanskrit cluster 'ṣṭ' (both retroflex sounds found only in Sanskrit); the vowel sign ི (i) gives 'i'; and the small circle ཾ (anusvāra) above the stack nasalises the final vowel to '-iṃ'. Altogether: 'puṣṭiṃ', the accusative form of puṣṭi ('increase'), the direct object of the following verb kuru. This is the final syllable of the word and the following word ཀུ་རུ begins with ཀ, which does not change this syllable's sound (the anusvāra -iṃ is simply pronounced as a nasalised vowel before the next consonant, not assimilated to it)."
            }
          ]
        },
        {
          script: "ཀུ་རུ",
          wylie: "ku ru",
          phon: "ku-ru",
          gloss: "kuru — 'make! / do!' (imperative)",
          syllables: [
            {
              tib: "ཀུ",
              wylie: "ku",
              phon: "ku",
              note: "Root letter ཀ (ka) with the vowel sign ུ (u): 'ku'. The following རུ begins with ར, which does not change this syllable's sound."
            },
            {
              tib: "རུ",
              wylie: "ru",
              phon: "ru",
              note: "Root letter ར (ra) with the vowel sign ུ (u): 'ru'. Together with ku, this spells the imperative kuru, 'make! / do!'. The following word སྭཱ་ཧཱ begins with the cluster སྭ, which has no effect on this syllable."
            }
          ]
        },
        {
          script: "སྭཱ་ཧཱ",
          wylie: "swA hA",
          phon: "svā-hā",
          gloss: "svāhā — 'hail! / so be it'",
          syllables: [
            {
              tib: "སྭཱ",
              wylie: "swA",
              phon: "svā",
              note:
                "Root letter ས (sa) with ཝ (wa, used to represent Sanskrit 'v') subjoined beneath it, plus the long vowel sign ཱ — reproduces the Sanskrit cluster 'sv' + long ā: 'svā'. The following ཧཱ begins with ཧ and does not change this syllable's sound."
            },
            {
              tib: "ཧཱ",
              wylie: "hA",
              phon: "hā",
              note: "Root letter ཧ (ha) with the long-vowel sign ཱ: 'hā'. This is the final syllable of the mantra, so there is no following syllable to affect it."
            }
          ]
        }
      ],
      wordGrouping:
        "Twenty Tibetan syllable-blocks group into the ten Sanskrit words: Om | Tā-re | Tut-tā-re | Tu-re | Ma-ma | Ā-yu-pu-ṇya | Jñā-na | Puṣṭiṃ | Ku-ru | Svā-hā. The first four words (Om Tare Tuttare Ture) are identical to the Green Tārā mantra; the remaining words add the long-life/wisdom/merit petition that is unique to White Tārā."
    }
  },

  {
    id: "vajra-guru",
    title: "Oṃ Āḥ Hūṃ Vajra Guru Padma Siddhi Hūṃ",
    deity: "Guru Padmasambhava (the 'Vajra Guru')",
    tags: ["guru yoga", "Padmasambhava", "twelve syllables"],
    sanskrit: {
      script: "ॐ आः हूँ वज्र गुरु पद्म सिद्धि हूँ",
      transliteration: "oṃ āḥ hūṃ vajra guru padma siddhi hūṃ",
      translation:
        "Oṃ Āḥ Hūṃ — Vajra Guru, the Lotus(-Born One) — grant attainments (siddhi), Hūṃ!",
      words: [
        {
          word: "oṃ āḥ hūṃ",
          gloss: "three seed syllables",
          note:
            "A standard opening triad of bīja syllables corresponding to body (oṃ), speech (āḥ) and mind (hūṃ), or to the three kāyas of a Buddha. āḥ ends in visarga (-ḥ), a final voiceless breath-release common to many Sanskrit seed syllables.",
          grammar:
            "All three are indeclinable bīja (seed) syllables, outside the normal case system. āḥ ends in visarga (ḥ), the Sanskrit sandhi-sound that replaces final -s/-r in many contexts — here it is simply part of the fixed seed syllable's form, not a live grammatical ending."
        },
        {
          word: "vajra guru padma",
          gloss: "Vajra-Guru Padma(sambhava)",
          note:
            "A string of nominal stems used as an epithet/name for Padmasambhava: vajra ('diamond/thunderbolt', symbol of indestructible reality), guru ('teacher/master'), padma ('lotus', referring to his miraculous lotus-birth). In mantric Sanskrit such epithets are very often left as bare stems without case endings — a hallmark of 'mantra Sanskrit', which is looser than classical literary Sanskrit.",
          grammar:
            "Sequence of uninflected nominal stems (a-stems: vajra, guru, padma) used in apposition as a vocative-like epithet, '(O) Vajra-Guru Padma...'. Classical grammar would expect an explicit vocative ending, but for masculine a-stems the vocative singular already coincides with the bare stem -a, so no extra ending is needed here."
        },
        {
          word: "siddhi",
          gloss: "accomplishment, spiritual attainment",
          note:
            "A feminine noun meaning 'success, accomplishment, supernatural power'. Here used almost as an imperative request: '(grant) siddhi!'.",
          grammar:
            "Feminine i-stem noun, here in its bare stem/nominative-vocative form siddhi(ḥ) (with the final -ḥ often dropped in recitation); functions as an implicit request, 'grant siddhi'."
        },
        {
          word: "hūṃ",
          gloss: "seed syllable",
          note: "Closing bīja, often felt to carry an imperative force — 'so be it now!'.",
          grammar:
            "Bīja syllable; grammatically an interjection/indeclinable, outside normal declension."
        }
      ]
    },
    tibetan: {
      script: "ༀ་ཨཱཿཧཱུྂ་བཛྲ་གུ་རུ་པདྨ་སིདྡྷི་ཧཱུྂ།",
      wylie: "oM AH hU~M badz+ra gu ru pad+ma sid+d+hi hU~M",
      phonetic: "Om Ah Hung Benza Guru Pema Siddhi Hung",
      translation: "Same as Sanskrit above — Sanskrit mantra spelled with Tibetan letters.",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "Again a Sanskrit mantra in 'Sanskrit-spelling' Tibetan: stacked consonant clusters (e.g. for vajra, padma, siddhi) and the visarga sign ཿ are used to keep the Sanskrit consonant clusters intact, rather than following ordinary Tibetan syllable-formation rules.",
      words: [
        {
          script: "ༀ་ཨཱཿཧཱུྂ",
          wylie: "oM AH hU~M",
          phon: "Om Ah Hung",
          gloss: "three seed syllables — body, speech, mind",
          syllables: [
            { tib: "ༀ", wylie: "oM", phon: "Om", note: "The Oṃ ligature, as in Om Mani Padme Hum, here representing the body aspect. The following ཨཱཿ begins with the vowel-carrier ཨ and has no effect on this syllable's sound." },
            {
              tib: "ཨཱཿ",
              wylie: "AH",
              phon: "Ah",
              note:
                "The bare vowel-carrier letter ཨ (a) with the long-vowel sign ཱ (ā) and the visarga ཿ (two small circles stacked vertically), representing the Sanskrit final -ḥ — a light voiceless aspiration after the vowel. Together: 'āḥ', representing speech. The following ཧཱུྂ begins with ཧ and does not modify this syllable."
            },
            { tib: "ཧཱུྂ", wylie: "hU~M", phon: "Hung", note: "As in Om Mani Padme Hum: root ཧ (ha) + long vowel sign ཱུ (ū) + anusvāra ྂ (ṃ) = 'hūṃ', representing mind. The following word begins with བཛྲ, which does not alter this syllable." }
          ]
        },
        {
          script: "བཛྲ་གུ་རུ་པདྨ",
          wylie: "badz+ra gu ru pad+ma",
          phon: "Benza Guru Pema",
          gloss: "Vajra Guru Padma — epithet of Padmasambhava",
          syllables: [
            {
              tib: "བཛྲ",
              wylie: "badz ra",
              phon: "Benza",
              note:
                "Root letter བ (ba) with ཛ (ja/dza) and ྲ (ra) both subjoined, reproducing the Sanskrit consonant cluster 'vajra' (the Tibetan letter ཝ for 'v' is not used here; བ stands in for the 'v/b' sound). Tibetans pronounce ཛ like 'dz', so the whole cluster comes out as 'badza/benza' — hence the very common Tibetanised spelling 'Benza' for 'Vajra'. The following གུ begins with plain ག and does not change this syllable."
            },
            { tib: "གུ", wylie: "gu", phon: "gu", note: "ག (ga) + vowel sign ུ (u) = 'gu'. The following རུ begins with ར and has no effect here." },
            { tib: "རུ", wylie: "ru", phon: "ru", note: "ར (ra) + vowel sign ུ (u) = 'ru'. Together གུ་རུ = 'guru', 'teacher/master'. The following པདྨ begins with པ and does not affect this syllable." },
            {
              tib: "པདྨ",
              wylie: "pad ma",
              phon: "Pema",
              note:
                "Root letter པ (pa) with ད (da) and མ (ma) subjoined — the Sanskrit cluster 'dma' of padma — read with the inherent vowel 'a'. Commonly Tibetanised to 'Pema'. As the last syllable of this epithet, it is followed by སིདྡྷི, which has no effect on its sound."
            }
          ]
        },
        {
          script: "སིདྡྷི",
          wylie: "sid+d+hi",
          phon: "Siddhi",
          gloss: "siddhi — accomplishment/attainment (the request: 'grant siddhi!')",
          syllables: [
            {
              tib: "སིདྡྷི",
              wylie: "sid+d+hi",
              phon: "Siddhi",
              note:
                "Root letter ས (sa) with vowel sign ི (i), carrying a stack of subjoined ད (da) and ྷ (the aspiration marker producing 'dha' — an aspirated sound foreign to native Tibetan), reproducing the Sanskrit cluster 'ddh' in siddhi. Read 'siddhi'. The closing ཧཱུྂ that follows begins with ཧ and does not change this syllable."
            }
          ]
        },
        {
          script: "ཧཱུྂ",
          wylie: "hU~M",
          phon: "Hung",
          gloss: "closing seed syllable (hūṃ)",
          syllables: [
            { tib: "ཧཱུྂ", wylie: "hU~M", phon: "Hung", note: "= 'hūṃ' again (root ཧ + long ū + anusvāra ṃ), closing the mantra. As the final syllable, there is no following syllable to affect it." }
          ]
        }
      ],
      wordGrouping:
        "Eight Tibetan syllable blocks correspond to the three opening seed syllables Om / Ah / Hung (body–speech–mind), the three-word epithet Benza–Guru–Pema (= Vajra Guru Padma, addressing Padmasambhava), and the closing request Siddhi–Hung ('grant attainments now')."
    }
  },

  {
    id: "manjushri-mantra",
    title: "Oṃ A Ra Pa Ca Na Dhīḥ",
    deity: "Mañjuśrī (Bodhisattva of Wisdom)",
    tags: ["wisdom", "seed-syllable mantra", "study aid"],
    sanskrit: {
      script: "ॐ अ र प च न धीः",
      transliteration: "oṃ a ra pa ca na dhīḥ",
      translation:
        "Oṃ — a, ra, pa, ca, na — dhīḥ (intellect/insight)! A mantra of pure 'seed syllables' said to embody the perfection of wisdom, sealed by the syllable of insight (dhīḥ).",
      words: [
        {
          word: "oṃ",
          gloss: "sacred syllable",
          note: "The usual opening praṇava.",
          grammar:
            "Indeclinable sacred particle (praṇava); not assigned to a part of speech in classical grammar."
        },
        {
          word: "a ra pa ca na",
          gloss: "five seed syllables (bīja)",
          note:
            "Unlike the other mantras here, these five syllables are not ordinary words at all — they have no dictionary meaning. In tantric exegesis each of the five is said to symbolise the absence of some inherently-existing characteristic (a key Madhyamaka/Prajñāpāramitā idea), so the string as a whole evokes the realisation of emptiness that is Mañjuśrī's wisdom. Because of this mantra's use in study, the five syllables a-ra-pa-ca-na are also used as a mnemonic 'alphabet' heading the traditional Siddham/Sanskrit syllabary order in some Buddhist scripts.",
          grammar:
            "Pure bīja (seed) syllables — phonetically simple consonant+vowel units with no grammatical category; they are not nouns, verbs or particles, only ritual sounds."
        },
        {
          word: "dhīḥ",
          gloss: "insight, intellect",
          note:
            "The one genuinely lexical word in the mantra: dhī, 'intellect/insight/wisdom' (also the seed syllable associated with Mañjuśrī and, in Hindu usage, with Sarasvatī).",
          grammar:
            "Nominative singular of the feminine ī-stem noun dhī ('intellect'). Feminine ī-stems form the nominative singular as stem + -ḥ (dhī → dhīḥ), the regular ending for feminine nouns of this class."
        }
      ]
    },
    tibetan: {
      script: "ༀ་ཨ་ར་པ་ཙ་ན་དྷཱིཿ",
      wylie: "oM a ra pa tsa na d+hIH",
      phonetic: "Om Ah Ra Pa Tsa Na Dhi",
      translation: "Same as Sanskrit above.",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "Each syllable here is written separately and simply — there is almost no consonant-stacking in this mantra, which makes it a gentle example of Sanskrit-spelling mode.",
      words: [
        {
          script: "ༀ",
          wylie: "oM",
          phon: "Om",
          gloss: "sacred syllable (oṃ)",
          syllables: [
            { tib: "ༀ", wylie: "oM", phon: "Om", note: "The Oṃ ligature, as in the other mantras. The following ཨ is the bare vowel-carrier and does not change this syllable's sound." }
          ]
        },
        {
          script: "ཨ",
          wylie: "a",
          phon: "a",
          gloss: "seed syllable 'a' (no independent meaning)",
          syllables: [
            { tib: "ཨ", wylie: "a", phon: "a", note: "The bare vowel-carrier letter ཨ with its inherent vowel 'a' and no additions. The following ར begins with plain ར and leaves this syllable unaffected." }
          ]
        },
        {
          script: "ར",
          wylie: "ra",
          phon: "ra",
          gloss: "seed syllable 'ra' (no independent meaning)",
          syllables: [
            { tib: "ར", wylie: "ra", phon: "ra", note: "Root letter ར with inherent vowel 'a': 'ra'. The following པ begins with plain པ and does not change this syllable." }
          ]
        },
        {
          script: "པ",
          wylie: "pa",
          phon: "pa",
          gloss: "seed syllable 'pa' (no independent meaning)",
          syllables: [
            { tib: "པ", wylie: "pa", phon: "pa", note: "Root letter པ with inherent vowel 'a': 'pa'. The following ཙ begins with plain ཙ and has no effect here." }
          ]
        },
        {
          script: "ཙ",
          wylie: "tsa",
          phon: "tsa",
          gloss: "seed syllable 'ca' (no independent meaning)",
          syllables: [
            {
              tib: "ཙ",
              wylie: "tsa",
              phon: "tsa",
              note:
                "Root letter ཙ ('tsa'). Tibetan has no separate letter matching the Sanskrit palatal 'ca'; the Tibetan letter ཙ (a native affricate 'ts') is conventionally used to transcribe Sanskrit 'c', so what is 'ca' in Sanskrit is read 'tsa' in Tibetan. The following ན begins with plain ན and does not modify this syllable."
            }
          ]
        },
        {
          script: "ན",
          wylie: "na",
          phon: "na",
          gloss: "seed syllable 'na' (no independent meaning)",
          syllables: [
            { tib: "ན", wylie: "na", phon: "na", note: "Root letter ན with inherent vowel 'a': 'na'. The closing syllable དྷཱིཿ begins with ད and does not affect this syllable's sound." }
          ]
        },
        {
          script: "དྷཱིཿ",
          wylie: "d+hIH",
          phon: "dhi",
          gloss: "dhīḥ — insight, intellect (the one lexical word in the mantra)",
          syllables: [
            {
              tib: "དྷཱིཿ",
              wylie: "d+hIH",
              phon: "dhi",
              note:
                "Root letter ད (da) with ྷ subjoined (the aspiration marker, giving the Sanskrit-only sound 'dha'), the long-vowel sign ཱི (long ī), and the visarga ཿ for final -ḥ. Together: 'dhīḥ', simplified in recitation to 'dhi'. This is the final syllable of the mantra, so there is no following syllable to affect it."
            }
          ]
        }
      ],
      wordGrouping:
        "Seven syllables = seven separate units (Om | A | Ra | Pa | Tsa | Na | Dhi). Unlike the other mantras, there is no compounding here — each syllable stands alone, six of them as pure seed-sounds and the last (dhīḥ) as the single meaningful word."
    }
  },

  {
    id: "medicine-buddha",
    title: "Oṃ Bhaiṣajye Bhaiṣajye Mahā-Bhaiṣajya-Rāje Samudgate Svāhā",
    deity: "Bhaiṣajyaguru, the Medicine Buddha",
    tags: ["healing", "Medicine Buddha"],
    sanskrit: {
      script: "ॐ भैषज्ये भैषज्ये महाभैषज्यराजे समुद्गते स्वाहा",
      transliteration: "oṃ bhaiṣajye bhaiṣajye mahā-bhaiṣajya-rāje samudgate svāhā",
      translation:
        "Oṃ! O Healer, O Healer, O Great King of Healing, O You who have fully arisen (beyond suffering), svāhā!",
      words: [
        {
          word: "oṃ",
          gloss: "sacred syllable",
          note: "Standard opening praṇava.",
          grammar:
            "Indeclinable sacred particle (praṇava); not assigned to a part of speech in classical grammar."
        },
        {
          word: "bhaiṣajye bhaiṣajye",
          gloss: "O Medicine/Healer! (x2)",
          note:
            "bhaiṣajya is a neuter a-stem noun meaning 'medicine, remedy, healing'. The repeated form bhaiṣajye functions as a vocative-style address ('O Healing One!'); doubling it is a common mantric intensifying device (compare tāre tuttāre above).",
          grammar:
            "bhaiṣajye ends in -e on the underlying a-stem bhaiṣajya-. In classical grammar -e on a neuter a-stem is the locative singular ('in/at...'), but in mantric usage such -e forms are conventionally read as vocative-like addresses ('O...!') — a well-known feature of Buddhist Hybrid Sanskrit, where locative and vocative endings are often interchanged or generalised."
        },
        {
          word: "mahā-bhaiṣajya-rāje",
          gloss: "O great king of healing!",
          note:
            "A compound: mahā- ('great', the compounding form of mahat) + bhaiṣajya ('healing') + rāja ('king'). The whole compound is again put in the same -e ('vocative-like') form, 'O Great King of Healing!' — an epithet of the Medicine Buddha as sovereign over all remedies.",
          grammar:
            "Compound noun ending in the same vocative-like -e (locative singular reused as vocative, as with bhaiṣajye above), here on the stem ...rāja-. mahā- is the compounding (bound) form of the adjective mahat ('great'); mahat- regularly becomes mahā- as the first member of a compound."
        },
        {
          word: "samudgate",
          gloss: "O one who has fully arisen!",
          note:
            "Built from two verbal prefixes sam- ('completely, together') and ud- ('up, forth') plus gata, the past participle of the root √gam ('to go'): sam + ud + gata → samudgata, 'gone forth completely / fully arisen (beyond suffering)'. Put in the same -e form as the preceding epithets.",
          grammar:
            "Past passive participle of √gam ('go') formed with the suffix -ta (gam + ta → gata, with the root-final nasal lost before -t), prefixed by two preverbs sam- and ud- stacked together, then given the same vocative-like -e ending as bhaiṣajye and mahā-bhaiṣajya-rāje above."
        },
        {
          word: "svāhā",
          gloss: "hail! / so be it",
          note: "The same closing ritual exclamation seen in the Tārā mantra.",
          grammar:
            "Indeclinable ritual interjection (nipāta); does not inflect and stands outside the case system."
        }
      ]
    },
    tibetan: {
      script: "ༀ་བྷཻ་ཥ་ཛྱེ་བྷཻ་ཥ་ཛྱེ་མ་ཧཱ་བྷཻ་ཥ་ཛྱ་རཱ་ཛེ་ས་མུཏྒ་ཏེ་སྭཱ་ཧཱ།",
      wylie: "oM b+hai Sha dz+ye b+hai Sha dz+ye ma hA b+hai Sha dz+ya rA dze sa mut+ga te swA hA",
      phonetic: "Om Bekandze Bekandze Maha Bekandze Radza Samudgate Soha",
      translation: "Same as Sanskrit above. ('Bekandze' is the everyday Tibetanised pronunciation of bhaiṣajye.)",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "This mantra has the heaviest consonant-clustering of the set, because Sanskrit retroflex/aspirate sounds (bh, ṣ, dgh-type clusters) that don't exist in native Tibetan all have to be specially written. In everyday chanting Tibetans simplify these clusters heavily — hence 'Bekandze' for bhaiṣajye and 'Radza' for rāja.",
      words: [
        {
          script: "ༀ",
          wylie: "oM",
          phon: "Om",
          gloss: "sacred syllable (oṃ)",
          syllables: [
            { tib: "ༀ", wylie: "oM", phon: "Om", note: "The Oṃ syllable, here written in full (vowel-carrier ཨ + o-vowel sign + anusvāra) rather than as the ligature ༀ used in the other mantras. The following བྷཻ begins with the voiced aspirate བྷ and does not change this syllable's sound." }
          ]
        },
        {
          script: "བྷཻ་ཥ་ཛྱེ",
          wylie: "b+hai Sha dz+ye",
          phon: "be-kan-dze",
          gloss: "bhaiṣajye — 'O Healer!' (first occurrence)",
          syllables: [
            {
              tib: "བྷཻ",
              wylie: "b+hai",
              phon: "be",
              note:
                "Root letter བ (ba) with the aspiration marker ྷ subjoined, producing 'bha' — the voiced aspirated sound that does not exist in native Tibetan — plus the vowel sign ཻ (ai). Together 'bhai', simplified in chanting to 'be'. The following ཥ begins with the retroflex ཥ and does not alter this syllable."
            },
            {
              tib: "ཥ",
              wylie: "Sha",
              phon: "kan",
              note:
                "ཥ is the Tibetan letter for the Sanskrit retroflex sibilant ṣa, again a Sanskrit-only sound. In the popular chant this whole syllable contributes to the '-kan-' of 'Bekandze'. The following ཛྱེ begins with ཛ and leaves this syllable unchanged."
            },
            {
              tib: "ཛྱེ",
              wylie: "dz+ye",
              phon: "dze",
              note:
                "Root letter ཛ (ja, pronounced 'dza' in Tibetan) with ྱ (ya) subjoined and the vowel sign ེ (e): 'jye', pronounced 'dze'. bhaiṣajye → 'be-kan-dze' in popular chant. The repeated བྷཻ that follows begins the same word again and does not change this syllable's sound."
            }
          ]
        },
        {
          script: "བྷཻ་ཥ་ཛྱེ",
          wylie: "b+hai Sha dz+ye",
          phon: "be-kan-dze",
          gloss: "bhaiṣajye — 'O Healer!' (repeated for emphasis)",
          syllables: [
            { tib: "བྷཻ", wylie: "b+hai", phon: "be", note: "Repeats the first syllable of bhaiṣajye: 'bhai' → 'be'. The following ཥ does not change its sound." },
            { tib: "ཥ", wylie: "Sha", phon: "kan", note: "Repeats: retroflex 'ṣa' → contributes '-kan-'. The following ཛྱེ does not alter this syllable." },
            { tib: "ཛྱེ", wylie: "dz+ye", phon: "dze", note: "Repeats: 'jye' → 'dze'. Second 'bhaiṣajye' = 'bekandze'. The following མ (beginning mahā) does not change this syllable's sound." }
          ]
        },
        {
          script: "མ་ཧཱ་བྷཻ་ཥ་ཛྱ་རཱ་ཛེ",
          wylie: "ma hA b+hai Sha dz+ya rA dze",
          phon: "ma-hā-be-kan-dza-rā-dze",
          gloss: "mahā-bhaiṣajya-rāje — 'O great king of healing!'",
          syllables: [
            { tib: "མ", wylie: "ma", phon: "ma", note: "Plain root letter མ with inherent vowel: 'ma' — the first syllable of mahā ('great'). The following ཧཱ begins with ཧ and does not change this syllable." },
            { tib: "ཧཱ", wylie: "hA", phon: "hā", note: "Root letter ཧ with long-vowel sign ཱ: 'hā'. Together with the preceding syllable: 'ma-hā' = mahā, 'great'. The following བྷཻ begins the third bhaiṣajya and does not alter this syllable." },
            { tib: "བྷཻ", wylie: "b+hai", phon: "be", note: "'bhai' again, beginning the third 'bhaiṣajya' (the one inside 'mahā-bhaiṣajya-rāja'). The following ཥ does not change this syllable's sound." },
            { tib: "ཥ", wylie: "Sha", phon: "kan", note: "'ṣa' → '-kan-', as before. The following ཛྱ does not affect this syllable." },
            {
              tib: "ཛྱ",
              wylie: "dz+ya",
              phon: "dza",
              note:
                "Like the earlier ཛྱེ but with the inherent vowel 'a' instead of the sign 'e' (no vowel sign present): 'jya' → 'dza'. Note the subtle difference from bhaiṣajye: this is bhaiṣajya (a-ending, compounding form), not bhaiṣajye. The following རཱ begins with ར and does not change this syllable."
            },
            { tib: "རཱ", wylie: "rA", phon: "rā", note: "Root letter ར with the long-vowel sign ཱ: 'rā' — beginning rāja, 'king'. The following ཛེ does not alter this syllable." },
            { tib: "ཛེ", wylie: "dze", phon: "dze", note: "Root letter ཛ with vowel sign ེ: 'je/dze'. Together rā-dze = rāje, '(O) King!'. This closes the compound; the next word ས begins samudgate and does not affect this syllable's sound." }
          ]
        },
        {
          script: "ས་མུཏྒ་ཏེ",
          wylie: "sa mut+ga te",
          phon: "sa-mut-ga-te",
          gloss: "samudgate — 'O one who has fully arisen!'",
          syllables: [
            { tib: "ས", wylie: "sa", phon: "sa", note: "Plain root letter ས with inherent vowel: 'sa' — beginning samudgate. The following མུཏྒ begins with མ and does not change this syllable." },
            {
              tib: "མུཏྒ",
              wylie: "mut+ga",
              phon: "mut-ga",
              note:
                "Root letter མ (ma) with vowel sign ུ (u) giving 'mu', followed in the same block by ྟ (subjoined ta) and ག (ga): a cluster reproducing the Sanskrit '-dg-' of (sam)udga(te), here spelled with 't' for 'd' as Tibetan has no separate way to stack a voiced 'd' in this position. Read 'mut-ga'. The following ཏེ begins with ཏ and does not alter this syllable."
            },
            { tib: "ཏེ", wylie: "te", phon: "te", note: "Root letter ཏ with vowel sign ེ: 'te'. sa-mut-ga-te = samudgate. The next word སྭཱ་ཧཱ begins with the cluster སྭ and does not change this syllable's sound." }
          ]
        },
        {
          script: "སྭཱ་ཧཱ",
          wylie: "swA hA",
          phon: "svā-hā",
          gloss: "svāhā — 'hail!'",
          syllables: [
            { tib: "སྭཱ", wylie: "swA", phon: "svā", note: "ས with subjoined ཝ (for Sanskrit 'v') and long vowel ཱ: 'svā' — as in the Tārā mantra. The following ཧཱ begins with ཧ and does not change this syllable." },
            { tib: "ཧཱ", wylie: "hA", phon: "hā", note: "ཧ with long vowel ཱ: 'hā'. Together svā-hā = svāhā. This is the final syllable of the mantra, so there is no following syllable to affect it." }
          ]
        }
      ],
      wordGrouping:
        "About eighteen Tibetan syllable-blocks group into the seven Sanskrit words: Om | Bhaiṣajye | Bhaiṣajye | Mahā-bhaiṣajya-rāje | Samudgate | Svāhā. Note that the long compound 'mahā-bhaiṣajya-rāje' alone spans six Tibetan syllable-blocks (ma-hā-bhai-ṣa-jya-rā-je, i.e. seven blocks) but functions as a single grammatical word."
    }
  },

  {
    id: "vajrasattva-hundred-syllable",
    title: "Vajrasattva Hundred-Syllable Mantra",
    deity: "Vajrasattva (embodiment of purity of all Buddhas)",
    tags: ["purification", "Vajrasattva", "hundred syllables"],
    sanskrit: {
      script:
        "ॐ वज्रसत्त्व समयम् अनुपालय । वज्रसत्त्व त्वेनोपतिष्ठ । दृढो मे भव । सुतोष्यो मे भव । सुपोष्यो मे भव । अनुरक्तो मे भव । सर्वसिद्धिं मे प्रयच्छ । सर्वकर्मसु च मे चित्तं श्रेयः कुरु हूं । ह ह ह ह होः । भगवन् सर्वतथागतवज्र मा मे मुञ्च । वज्री भव महासमयसत्त्व आः ॥",
      transliteration:
        "oṃ vajrasattva samayam anupālaya | vajrasattva tvenopatiṣṭha | dṛḍho me bhava | sutoṣyo me bhava | suposyo me bhava | anurakto me bhava | sarva-siddhiṃ me prayaccha | sarva-karmasu ca me cittaṃ śreyaḥ kuru hūṃ | ha ha ha ha hoḥ | bhagavan sarva-tathāgata-vajra mā me muñca | vajrī bhava mahāsamaya-sattva āḥ",
      translation:
        "Oṃ, Vajrasattva! Keep your sacred pledge (samaya). Vajrasattva, be present as me/abide close to me. Be steadfast for me. Be greatly pleased with me. Nourish me well. Be devoted to me. Grant me all accomplishments (siddhis). And in every action make my mind excellent — hūṃ! Ha ha ha ha hoḥ! O Blessed One, Vajra of all the Tathāgatas, do not abandon me — be the Vajra-holder, O great being of the sacred pledge, āḥ!",
      lines: [
        {
          script: "ॐ वज्रसत्त्व समयम् अनुपालय",
          translit: "oṃ vajrasattva samayam anupālaya",
          gloss: "Oṃ Vajrasattva, keep your sacred pledge!",
          note:
            "oṃ — the opening praṇava. vajrasattva — 'Vajra-Being', the deity of purification, addressed directly throughout this mantra. samayam anupālaya — accusative samayam ('pledge, sacred bond') + causative imperative anupālaya ('keep/maintain!'), from anu-√pāl."
        },
        {
          script: "वज्रसत्त्व त्वेनोपतिष्ठ",
          translit: "vajrasattva tvenopatiṣṭha",
          gloss: "Vajrasattva, be present as me!",
          note:
            "tvena — instrumental of tvam ('you'), 'by/as you'. upatiṣṭha — imperative of upa-√sthā, 'stand near, be present'. tvena + upatiṣṭha → tvenopatiṣṭha by sandhi."
        },
        {
          script: "दृढो मे भव",
          translit: "dṛḍho me bhava",
          gloss: "Be steadfast for me!",
          note:
            "dṛḍhaḥ ('firm, steadfast') + me ('for me') + bhava (imperative of √bhū, 'be'). Final -aḥ becomes -o before the voiced me."
        },
        {
          script: "सुतोष्यो मे भव",
          translit: "sutoṣyo me bhava",
          gloss: "Be greatly pleased with me!",
          note:
            "sutoṣyaḥ is a gerundive ('to be made pleased') from su- ('well/very') + √tuṣ ('be satisfied'). Parallel in form to suposyo and anurakto below."
        },
        {
          script: "सुपोष्यो मे भव",
          translit: "suposyo me bhava",
          gloss: "Nourish me well!",
          note:
            "suposyaḥ, another gerundive, from su- + √puṣ ('nourish'): 'to be well-nourished/sustained'."
        },
        {
          script: "अनुरक्तो मे भव",
          translit: "anurakto me bhava",
          gloss: "Be devoted to me!",
          note:
            "anuraktaḥ is the past participle of anu-√rañj, 'attached/devoted to'. Completes the set of four parallel '...me bhava' requests."
        },
        {
          script: "सर्वसिद्धिं मे प्रयच्छ",
          translit: "sarva-siddhiṃ me prayaccha",
          gloss: "Grant me all accomplishments!",
          note:
            "sarva-siddhim — accusative of sarva-siddhi, 'all attainments/siddhis'. prayaccha — imperative of pra-√yam/√dā, 'grant, give forth'."
        },
        {
          script: "सर्वकर्मसु च मे चित्तं श्रेयः कुरु हूं",
          translit: "sarva-karmasu ca me cittaṃ śreyaḥ kuru hūṃ",
          gloss: "And in all actions make my mind excellent — hūṃ!",
          note:
            "sarva-karmasu — locative plural, 'in all actions'. ca — 'and'. me cittam — 'my mind' (accusative). śreyaḥ — 'more excellent/auspicious', used adverbially. kuru — imperative of √kṛ, 'do/make'. hūṃ — closing seed syllable, as in Om Mani Padme Hum."
        },
        {
          script: "ह ह ह ह होः",
          translit: "ha ha ha ha hoḥ",
          gloss: "Ha ha ha ha hoḥ!",
          note:
            "A string of exclamatory seed-sounds with no literal meaning — linked in tantric exegesis to the four joys/empowerments, with hoḥ as a burst of joyful release marking the mantra's climax."
        },
        {
          script: "भगवन् सर्वतथागतवज्र मा मे मुञ्च",
          translit: "bhagavan sarva-tathāgata-vajra mā me muñca",
          gloss: "O Blessed One, Vajra of all the Tathāgatas, do not abandon me!",
          note:
            "bhagavan — vocative of bhagavat, 'Blessed/Glorious One'. sarva-tathāgata-vajra — '(O) Vajra (essence) of all the Buddhas'. mā me muñca — prohibitive mā + imperative muñca (√muc, 'release'): 'do not abandon me!'."
        },
        {
          script: "वज्री भव महासमयसत्त्व आः",
          translit: "vajrī bhava mahāsamaya-sattva āḥ",
          gloss: "Be the Vajra-holder, O great being of the pledge — āḥ!",
          note:
            "vajrī (vajrin, 'vajra-holder') + bhava ('be!'). mahāsamaya-sattva — 'great pledge-being', a vocative-like epithet of Vajrasattva. āḥ — closing seed syllable associated with speech, sealing the mantra."
        }
      ],
      words: [
        {
          word: "oṃ",
          gloss: "sacred syllable",
          note: "The usual opening praṇava — see note under Om Mani Padme Hum.",
          grammar:
            "Indeclinable sacred particle (praṇava); not assigned to a part of speech in classical grammar."
        },
        {
          word: "vajrasattva",
          gloss: "Vajrasattva, 'Vajra-Being'",
          note:
            "A karmadhāraya (descriptive) compound of vajra ('diamond/thunderbolt', symbol of indestructible awakened nature) + sattva ('being'). Vajrasattva is the deity of purification — practitioners visualise him and recite this mantra to purify broken vows and negative karma. Throughout the mantra he is addressed directly, hence the many vocative-like and imperative forms that follow.",
          grammar:
            "Compound built on the neuter noun sattva ('being, essence'), with vajra- as a descriptive first member (karmadhāraya-type compound): 'vajra-being'. Compare mahāsamaya-sattva (item 13) for the same pattern with a different first member, and vajrī (item 12) for a related epithet formed instead by suffixation."
        },
        {
          word: "samayam anupālaya",
          gloss: "keep/maintain (your) sacred pledge!",
          note:
            "samayam is the accusative singular of the neuter/masculine noun samaya, 'agreement, sacred bond, pledge' (the tantric commitments taken at empowerment). anupālaya is a causative imperative (2nd person singular) of anu-√pāl, 'to protect/guard/keep' — literally 'cause to be kept/maintained!'. Together: 'keep (your) samaya!' — the practitioner asks Vajrasattva to honour the bond that purifies broken vows.",
          grammar:
            "samayam = accusative singular (direct object). anupālaya is a causative imperative, 2nd person singular, of anu-√pāl ('protect/keep'). The regular thematic imperative 2sg ending for such causatives is -aya, one of several repeated '-a' endings (bhava, kuru, muñca, prayaccha, upatiṣṭha, anupālaya) that give the mantra its rhythmic, command-like character."
        },
        {
          word: "vajrasattva tvenopatiṣṭha",
          gloss: "Vajrasattva, be present (as) me!",
          note:
            "tvena is the instrumental singular of the pronoun tvam ('you'): 'by/through you, as you'. upatiṣṭha is the imperative of upa-√sthā, 'to stand near, to be present, to attend upon' — a sandhi of tvena + upatiṣṭha gives tvenopatiṣṭha. Sense: 'Vajrasattva, stand near/be present as (my own true) self.'",
          grammar:
            "tvena = instrumental singular of tvam ('you'). upatiṣṭha = imperative 2sg of upa-√sthā ('stand near'), with the regular thematic -a ending — see note on anupālaya above. Sandhi: tvena + upatiṣṭha → tvenopatiṣṭha (a + u → o)."
        },
        {
          word: "dṛḍho / sutoṣyo / suposyo / anurakto me bhava",
          gloss: "be firm / well-pleased / nourishing / devoted toward me!",
          note:
            "Four parallel phrases, each ending in me bhava ('be ... for/toward me', with bhava the imperative of √bhū 'to be', and me an enclitic form of the pronoun 'I' used for both genitive 'my' and dative 'to/for me'). dṛḍhaḥ = 'firm, steadfast' (adjective). sutoṣyaḥ and suposyaḥ are gerundives ('to be made greatly pleased' / 'to be greatly nourished', from su- 'well/very' + the gerundives of √tuṣ 'be satisfied' and √puṣ 'nourish'). anuraktaḥ = past participle of anu-√rañj, 'attached/devoted to'. Together these four lines ask Vajrasattva to remain firm, pleased, sustaining and devoted in relation to the practitioner.",
          grammar:
            "bhava = imperative 2sg of √bhū ('be'), regular thematic -a ending. sutoṣyaḥ and suposyaḥ are gerundives (future passive participles) in -ya from √tuṣ and √puṣ with the intensifying prefix su- ('well/very'), expressing '(that which is) to be done'; the final -aḥ (nom. sg. masc.) assimilates to -o before the following voiced me. anuraktaḥ is a past participle of anu-√rañj. me is the enclitic 1st-person singular pronoun (of aham, 'I'), here functioning as a dative, 'to/for me'."
        },
        {
          word: "sarva-siddhiṃ me prayaccha",
          gloss: "grant me all accomplishments!",
          note:
            "sarva ('all') + siddhim, accusative singular of the feminine noun siddhi ('accomplishment, attainment, success' — both ordinary and supernatural). prayaccha is the imperative of pra-√yam/√dā, 'to give forth, grant, bestow'. A direct request: 'grant me every siddhi!'",
          grammar:
            "siddhim = accusative singular (direct object of prayaccha). prayaccha = imperative 2sg of pra-√yam/√dā ('grant'), regular thematic -a ending. me = enclitic 1st-person pronoun functioning as dative, 'for me'."
        },
        {
          word: "sarva-karmasu ca me cittaṃ śreyaḥ kuru",
          gloss: "and make my mind excellent in all actions!",
          note:
            "sarva-karmasu = locative plural, 'in all actions/deeds' (karman, neuter n-stem). ca = 'and'. me cittam = 'my mind' (accusative, cittam from citta 'mind'). śreyaḥ is the neuter comparative/superlative adjective 'better, more excellent, most auspicious' used adverbially. kuru is the imperative of √kṛ, 'to do/make'. Sense: 'and in all my actions, make my mind excellent.'",
          grammar:
            "sarva-karmasu = locative plural (karman, neuter n-stem). me cittam: me is the enclitic 1st-person pronoun here functioning as a genitive, 'my'; cittam is accusative singular (direct object of kuru). śreyaḥ = neuter comparative/superlative adjective used adverbially. kuru = imperative 2sg of √kṛ ('do/make'), regular thematic -u ending (kṛ-class)."
        },
        {
          word: "hūṃ",
          gloss: "seed syllable (bīja)",
          note:
            "A non-lexical seed syllable, here closing the main body of the mantra and associated with the mind/wisdom aspect, as in Om Mani Padme Hum.",
          grammar:
            "Bīja syllable; grammatically an interjection/indeclinable, outside normal declension."
        },
        {
          word: "ha ha ha ha hoḥ",
          gloss: "ha ha ha ha hoḥ!",
          note:
            "A string of exclamatory seed-sounds with no literal dictionary meaning. In tantric exegesis the four ha syllables are variously linked to the four joys, the four empowerments, or the four immeasurables, with the final hoḥ as an exclamation of joy/release — a burst of exuberant sound marking the climax of the mantra before the closing invocation.",
          grammar:
            "Exclamatory seed-sounds with no grammatical category — not nouns, verbs or particles, only ritual sounds."
        },
        {
          word: "bhagavan sarva-tathāgata-vajra",
          gloss: "O Blessed One, Vajra of all the Tathāgatas!",
          note:
            "bhagavan is the vocative singular of bhagavat, 'possessing bhaga (fortune/glory)', i.e. 'Blessed/Glorious One' — a standard honorific for Buddhas. sarva-tathāgata-vajra is a compound used in apposition/vocative-like address: 'O Vajra (essence) of all the Tathāgatas (Buddhas)' — addressing Vajrasattva as the embodiment of every Buddha's enlightened nature.",
          grammar:
            "bhagavan = vocative singular of the -vat-stem adjective bhagavat ('possessing bhaga'). sarva-tathāgata-vajra = compound noun used in apposition, in a vocative-like address (no separate ending needed, as with vajra-guru-padma in the Vajra Guru mantra)."
        },
        {
          word: "mā me muñca",
          gloss: "do not abandon me!",
          note:
            "mā is the Sanskrit prohibitive particle, used with an imperative or injunctive to mean 'do not...!'. me here functions as 'me' (object). muñca is the imperative of √muc, 'to release, let go, abandon'. Together: 'do not let go of/abandon me!'",
          grammar:
            "Prohibitive construction: the particle mā + imperative/injunctive verb expresses a negative command, 'do not...!' — distinct from the ordinary negative na. me is the enclitic 1st-person pronoun, here the object of muñca ('release/abandon me'). muñca = imperative 2sg of √muc ('release'), regular thematic -a ending."
        },
        {
          word: "vajrī bhava",
          gloss: "be/become the Vajra-holder!",
          note:
            "vajrī is the nominative singular of vajrin, 'one who holds the vajra' (vajra + the possessive suffix -in). bhava, again the imperative of √bhū 'to be'. The practitioner asks to become (or asks Vajrasattva to remain) the vajra-holder — i.e. to fully embody indestructible awakened nature.",
          grammar:
            "vajrī (vajrin) is formed by the possessive suffix -in ('having/holding the vajra') — derivation by suffix, contrasting with the compounding seen in vajrasattva and mahāsamaya-sattva (items 2 and 13). bhava = imperative 2sg of √bhū ('be')."
        },
        {
          word: "mahāsamaya-sattva āḥ",
          gloss: "O great being of the sacred pledge! āḥ",
          note:
            "mahā- is the compounding form of mahat, 'great'. mahāsamaya-sattva, 'great pledge-being', is a vocative-like epithet addressing Vajrasattva as the embodiment of the great tantric commitment (samaya). āḥ is a closing seed syllable, often associated with speech, that seals the mantra (compare oṃ āḥ hūṃ in the Vajra Guru mantra).",
          grammar:
            "mahāsamaya-sattva is a karmadhāraya compound on sattva ('being, essence'), with mahāsamaya- ('great pledge') as descriptive first member — the same compounding pattern as vajrasattva (item 2), here used in vocative-like apposition. āḥ is an indeclinable closing bīja syllable, like oṃ and hūṃ."
        }
      ]
    },
    tibetan: {
      script:
        "ༀ་བཛྲ་སཏྭ་ས་མ་ཡ་མ་ནུ་པཱ་ལ་ཡ། བཛྲ་སཏྭ་ཏྭེ་ནོ་པ་ཏིཥྛ་དྲྀ་ཌྷོ་མེ་བྷ་ཝ། སུ་ཏོཥྱོ་མེ་བྷ་ཝ་སུ་པོཥྱོ་མེ་བྷ་ཝ་ཨ་ནུ་རཀྟོ་མེ་བྷ་ཝ། སརྦ་སིདྡྷིཾ་མེ་པྲ་ཡཙྪ་སརྦ་ཀརྨ་སུ་ཙ་མེ་ཙིཏྟཾ་ཤྲེ་ཡཿ་ཀུ་རུ་ཧཱུྂ། ཧ་ཧ་ཧ་ཧ་ཧོཿ བྷ་ག་ཝཱན་སརྦ་ཏ་ཐཱ་ག་ཏ་བཛྲ་མཱ་མེ་མུཉྩ། བཛྲཱི་བྷ་ཝ་མ་ཧཱ་ས་མ་ཡ་སཏྭ་ཨཱཿ",
      wylie:
        "oM badz+ra sa twa sa ma ya ma nu pA la ya/ badz+ra sa twa twe no pa tiSh+Tha dRi Dho me b+ha wa/ su toShyo me b+ha wa su poShyo me b+ha wa a nu rak+to me b+ha wa/ sarba sid+d+hiM me pra yatstsha sarba karma su tsa me tsit+taM shre yaH ku ru hU~M/ ha ha ha ha hoH/ b+ha ga wAn sarba ta thA ga ta badz+ra mA me mun+tsa/ badz+rI b+ha wa ma hA sa ma ya sa twa AH",
      phonetic:
        "Om Benza Sato Samaya Manupalaya, Benza Sato Tenopa Tishta Dridho Me Bhava, Sutokhyo Me Bhava Suposhyo Me Bhava Anurakto Me Bhava, Sarva Siddhim Me Prayatsa Sarva Karma Sutsa Me Tsittam Shreya Kuru Hung, Ha Ha Ha Ha Ho, Bhagavan Sarva Tathagata Benza Mame Muntsa, Benzri Bhava Maha Samaya Sato Ah",
      translation:
        "Same meaning as the Sanskrit (see above) — this is the Sanskrit mantra spelled out using Tibetan letters.",
      scriptType: "sanskrit-in-tibetan",
      intro:
        "Like Om Mani Padme Hum and the other deity mantras above, this is Sanskrit written in Tibetan 'Sanskrit-spelling' mode, so the ordinary Tibetan reading rules (silent prefixes/suffixes that shift tone, explained for Lama Khyen-no) do not apply. Each of the eighty-one Tibetan syllable-blocks is shown individually below, grouped into the nine Sanskrit word-units used above, with its own letter-by-letter construction and pronunciation — including the Sanskrit-only conjunct clusters such as ཙྪ ('cch' in prayaccha) and ཉྩ ('ñc' in muñca).",
      lines: [
        {
          script: "ༀ་བཛྲ་སཏྭ་ས་མ་ཡ་མ་ནུ་པཱ་ལ་ཡ",
          translit: "Om Benza Sato Samaya Manupalaya",
          gloss: "Om Vajrasattva, keep your pledge!",
          note:
            "The Oṃ ligature, then བཛྲ (badzra, for 'vajra') and སཏྭ (sa-twa, for 'sattva' — cf. 'Benza Sato'), followed by eight simple, unstacked syllables spelling samaya manupalaya."
        },
        {
          script: "བཛྲ་སཏྭ་ཏྭེ་ནོ་པ་ཏིཥྛ",
          translit: "Benza Sato Tenopa Tishta",
          gloss: "Vajrasattva, be present as me!",
          note:
            "Repeats 'Vajrasattva', then ཏྭེ་ནོ་པ་ཏིཥྛ — note ཥྛ, a stack of retroflex ཥ (ṣa) and ཏ (ta) used only to write Sanskrit."
        },
        {
          script: "དྲྀ་ཌྷོ་མེ་བྷ་ཝ",
          translit: "Dridho Me Bhava",
          gloss: "Be steadfast for me!",
          note:
            "དྲྀ uses the vocalic-r vowel sign ྲྀ (a Sanskrit-only vowel) for dṛ-; ཌྷོ adds the aspirated retroflex ཌྷ. མེ་བྷ་ཝ = me bhava, 'be ... for me'."
        },
        {
          script: "སུ་ཏོཥྱོ་མེ་བྷ་ཝ",
          translit: "Sutokhyo Me Bhava",
          gloss: "Be greatly pleased with me!",
          note:
            "ཏོཥྱོ carries retroflex ཥ plus subjoined ྱ (ya), reproducing the gerundive cluster '-ṣy-' of sutoṣyo."
        },
        {
          script: "སུ་པོཥྱོ་མེ་བྷ་ཝ",
          translit: "Suposhyo Me Bhava",
          gloss: "Nourish me well!",
          note:
            "Parallel to the previous line, with པོཥྱོ for poṣyo."
        },
        {
          script: "ཨ་ནུ་རཀྟོ་མེ་བྷ་ཝ",
          translit: "Anurakto Me Bhava",
          gloss: "Be devoted to me!",
          note:
            "རཀྟོ stacks ཀ and ཏ for the cluster 'kt' of anurakto, completing the set of four 'me bhava' lines."
        },
        {
          script: "སརྦ་སིདྡྷིཾ་མེ་པྲ་ཡཙྪ",
          translit: "Sarva Siddhim Me Prayatsa",
          gloss: "Grant me all accomplishments!",
          note:
            "སརྦ subjoins ར under ས for the cluster 'rv'. སིདྡྷིཾ stacks ད and ྷ for 'ddh', with anusvāra ཾ for the final -ṃ."
        },
        {
          script: "སརྦ་ཀརྨ་སུ་ཙ་མེ་ཙིཏྟཾ་ཤྲེ་ཡཿ་ཀུ་རུ་ཧཱུྂ",
          translit: "Sarva Karma Sutsa Me Tsittam Shreya Kuru Hung",
          gloss: "And in all actions make my mind excellent — hūṃ!",
          note:
            "ཙིཏྟཾ stacks ཏ for 'tt' in cittam. ཤྲེ uses ཤ, the Sanskrit-only palatal śa, with subjoined ར. The line closes on ཧཱུྂ (hūṃ)."
        },
        {
          script: "ཧ་ཧ་ཧ་ཧ་ཧོཿ",
          translit: "Ha Ha Ha Ha Ho",
          gloss: "Ha ha ha ha hoḥ!",
          note:
            "Five plain syllables with no consonant stacking at all — the simplest stretch of the whole mantra."
        },
        {
          script: "བྷ་ག་ཝཱན་སརྦ་ཏ་ཐཱ་ག་ཏ་བཛྲ་མཱ་མེ་མུཉྩ",
          translit: "Bhagavan Sarva Tathagata Benza Mame Muntsa",
          gloss: "O Blessed One, Vajra of all the Tathāgatas, do not abandon me!",
          note:
            "བྷ marks the voiced aspirate 'bha'; ཝཱན carries suffix ན for the final -n of bhagavan. མུཉྩ stacks ཉ and ཙ for the cluster 'ñc' of muñca."
        },
        {
          script: "བཛྲཱི་བྷ་ཝ་མ་ཧཱ་ས་མ་ཡ་སཏྭ་ཨཱཿ",
          translit: "Benzri Bhava Maha Samaya Sato Ah",
          gloss: "Be the Vajra-holder, O great being of the pledge — āḥ!",
          note:
            "བཛྲཱི adds the long-vowel sign ཱི for the '-ī' of vajrī. The mantra closes with མ་ཧཱ་ས་མ་ཡ་སཏྭ (mahāsamayasattva) and the seed syllable ཨཱཿ (āḥ)."
        }
      ],
      words: [
        {
          script: "ༀ་བཛྲ་སཏྭ",
          wylie: "oM badz+ra sa twa",
          phon: "Om Benza Sato",
          gloss: "Om Vajrasattva",
          syllables: [
            { tib: "ༀ", wylie: "oM", phon: "Om", note: "The Oṃ ligature, as in Om Mani Padme Hum. The following བཛྲ begins with བ and does not change this syllable's sound." },
            {
              tib: "བཛྲ",
              wylie: "badz+ra",
              phon: "Benza",
              note:
                "Root letter བ (ba) with ཛ (ja, pronounced 'dza') and ར (ra) both subjoined beneath it, reproducing the Sanskrit consonant cluster 'vajra' (cf. the Vajra Guru mantra, where this same cluster is read 'Benza'). The following སཏྭ begins with ས and does not change this syllable's sound."
            },
            {
              tib: "སཏྭ",
              wylie: "sa twa",
              phon: "sato",
              note:
                "Root letter ས (sa) with ཏ (ta) and ཝ (wa) stacked beneath it, reproducing the Sanskrit cluster 'ttva' of sattva ('being'); together བཛྲ་སཏྭ = 'Vajrasattva'. This is the final syllable of the word; the next word begins ས (samaya) — a different syllable beginning with the same consonant — and does not change the sound of this syllable."
            }
          ]
        },
        {
          script: "ས་མ་ཡ་མ་ནུ་པཱ་ལ་ཡ",
          wylie: "sa ma ya ma nu pA la ya",
          phon: "Samaya Manupalaya",
          gloss: "keep your sacred pledge!",
          syllables: [
            { tib: "ས", wylie: "sa", phon: "sa", note: "Root letter ས (sa) with its inherent vowel 'a': 'sa'. Begins samaya, 'pledge'. The following མ begins with མ and does not change this syllable's sound." },
            { tib: "མ", wylie: "ma", phon: "ma", note: "Root letter མ (ma) with inherent vowel 'a': 'ma'. The following ཡ begins with ཡ and does not change this syllable's sound." },
            { tib: "ཡ", wylie: "ya", phon: "ya", note: "Root letter ཡ (ya) with inherent vowel 'a': 'ya'. Together ས་མ་ཡ spells 'samaya' ('sacred pledge', accusative samayam with the final -m smoothed over in the popular chant). The following མ begins a new word (anupālaya) with the same letter མ and does not change this syllable's sound." },
            { tib: "མ", wylie: "ma", phon: "ma", note: "Root letter མ (ma) with inherent vowel 'a': 'ma'. Begins anupālaya, 'keep/maintain!'. The following ནུ begins with ན and does not change this syllable's sound." },
            { tib: "ནུ", wylie: "nu", phon: "nu", note: "Root letter ན (na) with the vowel sign ུ (u): 'nu'. Combined with the preceding ma, this gives 'manu-'. The following པཱ begins with པ and does not change this syllable's sound." },
            { tib: "པཱ", wylie: "pA", phon: "pa", note: "Root letter པ (pa) with the long-vowel sign ཱ (a-chen): 'pā'. The following ལ begins with ལ and does not change this syllable's sound." },
            { tib: "ལ", wylie: "la", phon: "la", note: "Root letter ལ (la) with inherent vowel 'a': 'la'. Combined with the preceding pā, this gives 'pāla-', 'protect/keep'. The following ཡ begins with ཡ and does not change this syllable's sound." },
            {
              tib: "ཡ",
              wylie: "ya",
              phon: "ya",
              note:
                "Root letter ཡ (ya) with inherent vowel 'a': 'ya'. Together ནུ་པཱ་ལ་ཡ = 'anupālaya' (causative imperative, 'keep/maintain!'), and the whole eight-syllable block reads 'samaya manupālaya' = 'keep (your) sacred pledge!'. This is the final syllable of the word; the next word repeats 'Benza Sato' and does not affect this syllable's sound."
            }
          ]
        },
        {
          script: "བཛྲ་སཏྭ་ཏྭེ་ནོ་པ་ཏིཥྛ་དྲྀ་ཌྷོ་མེ་བྷ་ཝ",
          wylie: "badz+ra sa twa twe no pa tiSh+Tha dRi Dho me b+ha wa",
          phon: "Benza Sato Tenopa Tishta Dridho Me Bhava",
          gloss: "Vajrasattva, be present as me! Be steadfast for me!",
          syllables: [
            { tib: "བཛྲ", wylie: "badz+ra", phon: "Benza", note: "Same as the བཛྲ above: root བ (ba) with ཛ (dza) and ར (ra) subjoined, for the cluster 'vajra'. The following སཏྭ begins with ས and does not change this syllable's sound." },
            { tib: "སཏྭ", wylie: "sa twa", phon: "sato", note: "Same as above: root ས (sa) with ཏ (ta) and ཝ (wa) stacked beneath, for 'ttva' of sattva; together 'Vajrasattva' again. The following ཏྭེ begins with ཏ and does not change this syllable's sound." },
            {
              tib: "ཏྭེ",
              wylie: "twe",
              phon: "twe",
              note:
                "Root letter ཏ (ta) with ཝ (wa) subjoined beneath it and the vowel sign ེ (e) on top, giving the cluster-plus-vowel 'twe' — reproduces the Sanskrit 'tve' of tvena ('by/as you', instrumental). The following ནོ begins with ན and does not change this syllable's sound."
            },
            { tib: "ནོ", wylie: "no", phon: "no", note: "Root letter ན (na) with the vowel sign ོ (o): 'no'. Combined with the preceding twe, this gives 'tveno-' (tvena + upa- by sandhi, a + u → o). The following པ begins with པ and does not change this syllable's sound." },
            { tib: "པ", wylie: "pa", phon: "pa", note: "Root letter པ (pa) with inherent vowel 'a': 'pa'. Begins '-pa-' of upatiṣṭha. The following ཏིཥྛ begins with ཏ and does not change this syllable's sound." },
            {
              tib: "ཏིཥྛ",
              wylie: "tiSh+Tha",
              phon: "tishta",
              note:
                "Root letter ཏ (ta) with the vowel sign ི (i), carrying a stack of the retroflex letters ཥ (ṣa) and ཏ (ta) subjoined beneath it — together ཥྛ reproduces the Sanskrit aspirated-retroflex cluster 'ṣṭh' (both letters found only in Sanskrit loanwords). Read 'tiṣṭha'. Combined with the preceding 'tveno-', this completes 'tvenopatiṣṭha' = 'be present as/attend upon (me)'. The following དྲྀ begins with ད and does not change this syllable's sound."
            },
            {
              tib: "དྲྀ",
              wylie: "dRi",
              phon: "dri",
              note:
                "Root letter ད (da) with ར (ra) subjoined beneath it and the vocalic-r vowel sign ྲྀ on top — a vowel sign found only in Sanskrit loanwords, representing the vowel 'ṛ' (a rolled/vocalic r). Together 'dṛ-', the start of dṛḍha ('firm, steadfast'). The following ཌྷོ begins with ཌ and does not change this syllable's sound."
            },
            {
              tib: "ཌྷོ",
              wylie: "Dho",
              phon: "dho",
              note:
                "The retroflex aspirate root letter ཌྷ (ḍha — a voiced, aspirated, retroflex consonant found only in Sanskrit) with the vowel sign ོ (o): 'ḍho'. Combined with the preceding dṛ-, this gives 'dṛḍho' ('firm, steadfast'; the underlying -aḥ becomes -o before the following voiced me). The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "Root letter མ (ma) with the vowel sign ེ (e): 'me' — the enclitic pronoun 'me/for me'. The following བྷ begins with བྷ and does not change this syllable's sound." },
            {
              tib: "བྷ",
              wylie: "b+ha",
              phon: "bha",
              note:
                "The voiced-aspirate letter བྷ — root letter བ (ba) with the aspiration mark ྷ subjoined, giving 'bha', a sound foreign to native Tibetan — with inherent vowel 'a'. Begins bhava, 'be!'. The following ཝ begins with ཝ and does not change this syllable's sound."
            },
            {
              tib: "ཝ",
              wylie: "wa",
              phon: "wa",
              note:
                "Root letter ཝ (wa, used to represent Sanskrit 'v') with inherent vowel 'a': 'wa'. Together བྷ་ཝ = 'bhava' ('be!'), and the whole block reads 'Vajrasattva, tvenopatiṣṭha, dṛḍho me bhava' = 'Vajrasattva, attend on me, be steadfast for me!'. This is the final syllable of the word; the next word begins སུ and does not change this syllable's sound."
            }
          ]
        },
        {
          script: "སུ་ཏོཥྱོ་མེ་བྷ་ཝ་སུ་པོཥྱོ་མེ་བྷ་ཝ་ཨ་ནུ་རཀྟོ་མེ་བྷ་ཝ",
          wylie: "su toShyo me b+ha wa su poShyo me b+ha wa a nu rak+to me b+ha wa",
          phon: "Sutokhyo Me Bhava Suposhyo Me Bhava Anurakto Me Bhava",
          gloss: "Be greatly pleased with me! Nourish me well! Be devoted to me!",
          syllables: [
            { tib: "སུ", wylie: "su", phon: "su", note: "Root letter ས (sa) with the vowel sign ུ (u): 'su' — the intensifying prefix 'well/very'. The following ཏོཥྱོ begins with ཏ and does not change this syllable's sound." },
            {
              tib: "ཏོཥྱོ",
              wylie: "toShyo",
              phon: "toshyo",
              note:
                "Root letter ཏ (ta) with the vowel sign ོ (o), carrying a stack of the retroflex letter ཥ (ṣa, Sanskrit-only) with subjoined ྱ (ya) — together ཥྱ reproduces the gerundive cluster '-ṣy-'. Read 'toṣyo' (the underlying -aḥ of sutoṣyaḥ becomes -o before the voiced me that follows). Combined with su-, this gives 'sutoṣyo' = 'to be made greatly pleased'. The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "Root letter མ (ma) with the vowel sign ེ (e): 'me' — 'me/for me'. The following བྷ begins with བྷ and does not change this syllable's sound." },
            { tib: "བྷ", wylie: "b+ha", phon: "bha", note: "The voiced-aspirate letter བྷ (ba + aspiration mark ྷ) with inherent vowel 'a': 'bha'. Begins bhava, 'be!'. The following ཝ begins with ཝ and does not change this syllable's sound." },
            { tib: "ཝ", wylie: "wa", phon: "wa", note: "Root letter ཝ (wa) with inherent vowel 'a': 'wa'. Together བྷ་ཝ = 'bhava'; with the preceding syllables, 'sutoṣyo me bhava' = 'be greatly pleased with me!'. The following སུ begins a new repetition with the same letter ས and does not change this syllable's sound." },
            { tib: "སུ", wylie: "su", phon: "su", note: "Same as the first སུ above: root ས (sa) with vowel sign ུ (u), 'su' — begins suposyo, 'to be well-nourished'. The following པོཥྱོ begins with པ and does not change this syllable's sound." },
            {
              tib: "པོཥྱོ",
              wylie: "poShyo",
              phon: "poshyo",
              note:
                "Root letter པ (pa) with the vowel sign ོ (o), carrying the same retroflex-plus-subjoined stack ཥྱ as ཏོཥྱོ above, reproducing '-ṣy-'. Read 'poṣyo' (suposyaḥ → suposyo before me). Combined with su-, 'suposyo' = 'to be well-nourished'. The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "= 'me/for me', as above. The following བྷ begins with བྷ and does not change this syllable's sound." },
            { tib: "བྷ", wylie: "b+ha", phon: "bha", note: "= 'bha', as above, beginning bhava. The following ཝ begins with ཝ and does not change this syllable's sound." },
            { tib: "ཝ", wylie: "wa", phon: "wa", note: "= 'wa', completing the second 'bhava': 'suposyo me bhava' = 'nourish me well!'. The following ཨ begins a new word with the vowel-carrier ཨ and does not change this syllable's sound." },
            {
              tib: "ཨ",
              wylie: "a",
              phon: "a",
              note:
                "The vowel-carrier letter ཨ (a-chung), used to write a vowel that does not follow a consonant: short 'a'. Begins anurakto, 'devoted'. The following ནུ begins with ན and does not change this syllable's sound."
            },
            { tib: "ནུ", wylie: "nu", phon: "nu", note: "Root letter ན (na) with the vowel sign ུ (u): 'nu'. Combined with the preceding a, this gives 'anu-' ('toward'). The following རཀྟོ begins with ར and does not change this syllable's sound." },
            {
              tib: "རཀྟོ",
              wylie: "rak+to",
              phon: "rakto",
              note:
                "Root letter ར (ra) with inherent vowel 'a', carrying a stack of subjoined ཀ (ka) and ཏ (ta) — together ཀྟ reproduces the consonant cluster 'kt', plus the vowel sign ོ (o) on the stack giving the final '-o'. Read 'rakto' (anuraktaḥ → anurakto before me, by the same -aḥ→-o sandhi seen above). Combined with anu-, 'anurakto' = 'devoted (to)'. The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "= 'me/for me', as above. The following བྷ begins with བྷ and does not change this syllable's sound." },
            { tib: "བྷ", wylie: "b+ha", phon: "bha", note: "= 'bha', as above, beginning the third bhava. The following ཝ begins with ཝ and does not change this syllable's sound." },
            {
              tib: "ཝ",
              wylie: "wa",
              phon: "wa",
              note:
                "= 'wa', completing the third 'bhava': 'anurakto me bhava' = 'be devoted to me!'. This is the final syllable of this long word, which strings together all three 'me bhava' requests (well-pleased, well-nourished, devoted). The next word begins སརྦ and does not change the sound of this syllable."
            }
          ]
        },
        {
          script: "སརྦ་སིདྡྷིཾ་མེ་པྲ་ཡཙྪ་སརྦ་ཀརྨ་སུ་ཙ་མེ་ཙིཏྟཾ་ཤྲེ་ཡཿ་ཀུ་རུ་ཧཱུྂ",
          wylie: "sarba sid+d+hiM me pra yatstsha sarba karma su tsa me tsit+taM shre yaH ku ru hU~M",
          phon: "Sarva Siddhim Me Prayatsa Sarva Karma Sutsa Me Tsittam Shreya Kuru Hung",
          gloss: "Grant me all accomplishments! And in all actions make my mind excellent — hūṃ!",
          syllables: [
            {
              tib: "སརྦ",
              wylie: "sarba",
              phon: "sarva",
              note:
                "Root letter ས (sa) with inherent vowel 'a', carrying ར (ra) subjoined beneath it — together རྦ reproduces the Sanskrit cluster 'rv' of sarva ('all'). Read 'sarva'. The following སིདྡྷིཾ begins with ས and does not change this syllable's sound."
            },
            {
              tib: "སིདྡྷིཾ",
              wylie: "sid+d+hiM",
              phon: "siddhim",
              note:
                "Root letter ས (sa) with the vowel sign ི (i): 'si'. Beneath it are stacked ད (da) and the aspiration mark ྷ, giving the voiced-aspirate cluster 'ddh' (found only in Sanskrit), plus the vowel sign ི again for 'dhi', and finally the anusvāra ཾ (a small circle above the stack) nasalising the vowel to '-iṃ'. Together 'siddhiṃ' = 'accomplishments' (accusative). The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "Root letter མ (ma) with vowel sign ེ (e): 'me' — 'for me'. The following པྲ begins with པ and does not change this syllable's sound." },
            {
              tib: "པྲ",
              wylie: "pra",
              phon: "pra",
              note:
                "Root letter པ (pa) with ར (ra) subjoined beneath it: the cluster 'pr' plus the inherent vowel 'a' gives 'pra' — the verbal prefix 'forth'. The following ཡཙྪ begins with ཡ and does not change this syllable's sound."
            },
            {
              tib: "ཡཙྪ",
              wylie: "yatstsha",
              phon: "yatsa",
              note:
                "Root letter ཡ (ya) with inherent vowel 'a', followed in the same syllable-block by a stack of ཙ (tsa) with the subjoined form ྪ of ཚ (tsha) beneath it. This ཙྪ stack reproduces the Sanskrit conjunct cluster 'cch' (an unaspirated affricate plus its aspirated counterpart) found in prayaccha ('grant!', imperative of pra-√yam/√dā). Together pra + yaccha = 'prayaccha' = 'grant!'. This is the final syllable of 'prayaccha'; the following syllable སརྦ begins a new phrase ('sarva-karmasu...') with the same letter ས and does not change the sound of this syllable."
            },
            { tib: "སརྦ", wylie: "sarba", phon: "sarva", note: "Same as the first སརྦ above: ས with subjoined ར for the cluster 'rv' = 'sarva'. Here begins sarva-karmasu, 'in all actions'. The following ཀརྨ begins with ཀ and does not change this syllable's sound." },
            {
              tib: "ཀརྨ",
              wylie: "karma",
              phon: "karma",
              note:
                "Root letter ཀ (ka) with inherent vowel 'a', carrying ར (ra) and མ (ma) subjoined beneath it — together རྨ reproduces the cluster 'rm' of karma ('action, deed'). The following སུ begins with ས and does not change this syllable's sound."
            },
            { tib: "སུ", wylie: "su", phon: "su", note: "Root letter ས (sa) with the vowel sign ུ (u): 'su' — here the locative-plural ending '-su' of karmasu, 'in (all) actions'. The following ཙ begins with ཙ and does not change this syllable's sound." },
            {
              tib: "ཙ",
              wylie: "tsa",
              phon: "tsa",
              note:
                "Root letter ཙ (tsa, the plain unaspirated affricate used to write Sanskrit 'c') with inherent vowel 'a': 'ca' = 'and'. The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "Root letter མ (ma) with vowel sign ེ (e): 'me' — here functioning as 'my' (genitive). The following ཙིཏྟཾ begins with ཙ and does not change this syllable's sound." },
            {
              tib: "ཙིཏྟཾ",
              wylie: "tsit+taM",
              phon: "tsittam",
              note:
                "Root letter ཙ (tsa) with the vowel sign ི (i): 'ci'. Beneath it ཏ (ta) is stacked twice (doubled), reproducing the cluster 'tt' of cittam ('mind'), and the anusvāra ཾ nasalises the final vowel to '-aṃ'. Together 'cittaṃ' = 'mind' (accusative). The following ཤྲེ begins with ཤ and does not change this syllable's sound."
            },
            {
              tib: "ཤྲེ",
              wylie: "shre",
              phon: "shre",
              note:
                "The Sanskrit-only palatal sibilant root letter ཤ (śa) with ར (ra) subjoined beneath it and the vowel sign ེ (e) on top: 'śre' — begins śreyaḥ, 'more excellent'. The following ཡཿ begins with ཡ and does not change this syllable's sound."
            },
            {
              tib: "ཡཿ",
              wylie: "yaH",
              phon: "ya",
              note:
                "Root letter ཡ (ya) with inherent vowel 'a' and the visarga ཿ (two small circles after the letter, marking the Sanskrit final aspirated '-ḥ'): 'yaḥ'. Combined with the preceding śre-, this completes 'śreyaḥ' = 'more excellent/auspicious'. The following ཀུ begins with ཀ and does not change this syllable's sound."
            },
            { tib: "ཀུ", wylie: "ku", phon: "ku", note: "Root letter ཀ (ka) with the vowel sign ུ (u): 'ku' — begins kuru, 'make/do!'. The following རུ begins with ར and does not change this syllable's sound." },
            { tib: "རུ", wylie: "ru", phon: "ru", note: "Root letter ར (ra) with the vowel sign ུ (u): 'ru'. Together ཀུ་རུ = 'kuru' = 'make/do!' (the whole phrase: 'and in all actions make my mind excellent'). The following ཧཱུྂ begins with ཧ and does not change this syllable's sound." },
            {
              tib: "ཧཱུྂ",
              wylie: "hU~M",
              phon: "hung",
              note:
                "Root letter ཧ (ha) with the long vowel sign ཱུ (combination of ཱ and ུ giving long 'ū') and the anusvāra ྂ for the final nasal '-ṃ' — the seed syllable hūṃ, as in Om Mani Padme Hum. This is the final syllable of this long word block; the next phrase ཧ་ཧ་ཧ་ཧ་ཧོཿ does not affect the sound of this hūṃ."
            }
          ]
        },
        {
          script: "ཧ་ཧ་ཧ་ཧ་ཧོཿ",
          wylie: "ha ha ha ha hoH",
          phon: "Ha Ha Ha Ha Ho",
          gloss: "Ha ha ha ha hoḥ!",
          syllables: [
            { tib: "ཧ", wylie: "ha", phon: "ha", note: "Root letter ཧ (ha) with its inherent vowel 'a': 'ha'. The following ཧ (identical) does not change this syllable's sound." },
            { tib: "ཧ", wylie: "ha", phon: "ha", note: "A second, identical ཧ (ha): 'ha'. The following ཧ does not change this syllable's sound." },
            { tib: "ཧ", wylie: "ha", phon: "ha", note: "A third, identical ཧ (ha): 'ha'. The following ཧ does not change this syllable's sound." },
            { tib: "ཧ", wylie: "ha", phon: "ha", note: "A fourth, identical ཧ (ha): 'ha'. The following ཧོཿ begins with ཧ and does not change this syllable's sound." },
            {
              tib: "ཧོཿ",
              wylie: "hoH",
              phon: "ho",
              note:
                "Root letter ཧ (ha) with the vowel sign ོ (o) and the visarga ཿ (marking the Sanskrit final aspirated '-ḥ'): 'hoḥ'. Together with the four preceding 'ha' syllables, this forms the exclamatory burst 'ha ha ha ha hoḥ!' — no consonant stacking at all in this whole stretch, the simplest of the mantra. The following syllable begins བྷ (bhagavan) and does not change the sound of this syllable."
            }
          ]
        },
        {
          script: "བྷ་ག་ཝཱན་སརྦ་ཏ་ཐཱ་ག་ཏ་བཛྲ",
          wylie: "b+ha ga wAn sarba ta thA ga ta badz+ra",
          phon: "Bhagavan Sarva Tathagata Vajra",
          gloss: "O Blessed One, Vajra of all the Tathāgatas!",
          syllables: [
            { tib: "བྷ", wylie: "b+ha", phon: "bha", note: "The voiced-aspirate letter བྷ (root བ 'ba' with the aspiration mark ྷ subjoined) with inherent vowel 'a': 'bha'. Begins bhagavan, the vocative 'O Blessed One!'. The following ག begins with ག and does not change this syllable's sound." },
            { tib: "ག", wylie: "ga", phon: "ga", note: "Root letter ག (ga) with inherent vowel 'a': 'ga'. Combined with the preceding bha, this gives 'bhaga-' ('fortune/glory'). The following ཝཱན begins with ཝ and does not change this syllable's sound." },
            {
              tib: "ཝཱན",
              wylie: "wAn",
              phon: "wan",
              note:
                "Root letter ཝ (wa, for Sanskrit 'v') with the long-vowel sign ཱ on top and the letter ན (na) added as a suffix closing the syllable — together 'vān'. Combined with bhaga-, this gives 'bhagavān/bhagavan' = '(O) Blessed/Glorious One!' (vocative of the -vat stem). The following སརྦ begins with ས and does not change this syllable's sound."
            },
            { tib: "སརྦ", wylie: "sarba", phon: "sarva", note: "Root ས (sa) with subjoined ར (ra), reproducing the cluster 'rv': 'sarva' = 'all'. Begins sarva-tathāgata-vajra, 'Vajra of all the Tathāgatas'. The following ཏ begins with ཏ and does not change this syllable's sound." },
            { tib: "ཏ", wylie: "ta", phon: "ta", note: "Root letter ཏ (ta) with inherent vowel 'a': 'ta'. Begins tathāgata. The following ཐཱ begins with ཐ and does not change this syllable's sound." },
            {
              tib: "ཐཱ",
              wylie: "thA",
              phon: "tha",
              note:
                "The aspirated root letter ཐ (tha — an aspirate found in Sanskrit loanwords, distinct from plain ཏ) with the long-vowel sign ཱ: 'thā'. Combined with the preceding ta, this gives 'tathā-' ('thus'). The following ག begins with ག and does not change this syllable's sound."
            },
            { tib: "ག", wylie: "ga", phon: "ga", note: "Root letter ག (ga) with inherent vowel 'a': 'ga'. The following ཏ begins with ཏ and does not change this syllable's sound." },
            {
              tib: "ཏ",
              wylie: "ta",
              phon: "ta",
              note:
                "Root letter ཏ (ta) with inherent vowel 'a': 'ta'. Together ག-ཏ = 'gata' ('gone'), and tathā-gata = 'tathāgata' = 'one who has thus gone' (a Buddha). The following བཛྲ begins with བ and does not change this syllable's sound."
            },
            {
              tib: "བཛྲ",
              wylie: "badz+ra",
              phon: "benza",
              note:
                "Root letter བ (ba) with ཛ (dza) and ར (ra) subjoined, as in 'Om Vajrasattva' above, giving 'vajra'. Together sarva-tathāgata-vajra = 'Vajra (essence) of all the Tathāgatas' — the whole phrase reading 'Bhagavan, Vajra of all the Tathāgatas!'. This is the final syllable of this word; the next word begins མཱ and does not change this syllable's sound."
            }
          ]
        },
        {
          script: "མཱ་མེ་མུཉྩ",
          wylie: "mA me mun+tsa",
          phon: "Ma Me Muntsa",
          gloss: "do not abandon me!",
          syllables: [
            {
              tib: "མཱ",
              wylie: "mA",
              phon: "ma",
              note:
                "Root letter མ (ma) with the long-vowel sign ཱ: 'mā' — the Sanskrit prohibitive particle 'do not...!'. The following མེ begins with མ and does not change this syllable's sound."
            },
            { tib: "མེ", wylie: "me", phon: "me", note: "Root letter མ (ma) with the vowel sign ེ (e): 'me' — here the object 'me' of muñca. The following མུཉྩ begins with མ and does not change this syllable's sound." },
            {
              tib: "མུཉྩ",
              wylie: "mun+tsa",
              phon: "muntsa",
              note:
                "Root letter མ (ma) with the vowel sign ུ (u): 'mu', carrying a stack of subjoined ཉ (nya) and ཙ (tsa) beneath it. This ཉྩ stack reproduces the Sanskrit conjunct cluster 'ñc' (palatal nasal + unaspirated affricate) found in muñca ('release/abandon!', imperative of √muc). Together 'mā me muñca' = 'do not abandon me!'. This is the final syllable of the word; the next word begins བཛྲཱི and does not change this syllable's sound."
            }
          ]
        },
        {
          script: "བཛྲཱི་བྷ་ཝ་མ་ཧཱ་ས་མ་ཡ་སཏྭ་ཨཱཿ",
          wylie: "badz+rI b+ha wa ma hA sa ma ya sa twa AH",
          phon: "Benzri Bhava Maha Samaya Sato Ah",
          gloss: "Be the Vajra-holder, O great being of the pledge — āḥ!",
          syllables: [
            {
              tib: "བཛྲཱི",
              wylie: "badz+rI",
              phon: "benzri",
              note:
                "The familiar 'vajra' cluster (root བ 'ba' with ཛ 'dza' and ར 'ra' subjoined) plus the long-vowel sign ཱི (a combination of ཱ and ི giving long 'ī') on top — together 'vajrī' = 'vajra-holder' (vajra + the possessive suffix -in). The following བྷ begins with བྷ and does not change this syllable's sound."
            },
            { tib: "བྷ", wylie: "b+ha", phon: "bha", note: "The voiced-aspirate letter བྷ with inherent vowel 'a': 'bha'. Begins bhava, 'be!'. The following ཝ begins with ཝ and does not change this syllable's sound." },
            { tib: "ཝ", wylie: "wa", phon: "wa", note: "Root letter ཝ (wa) with inherent vowel 'a': 'wa'. Together བྷ་ཝ = 'bhava' = 'be!'; 'vajrī bhava' = 'be the vajra-holder!'. The following མ begins with མ and does not change this syllable's sound." },
            { tib: "མ", wylie: "ma", phon: "ma", note: "Root letter མ (ma) with inherent vowel 'a': 'ma'. Begins mahā, 'great'. The following ཧཱ begins with ཧ and does not change this syllable's sound." },
            {
              tib: "ཧཱ",
              wylie: "hA",
              phon: "ha",
              note:
                "Root letter ཧ (ha) with the long-vowel sign ཱ: 'hā'. Combined with the preceding ma, this gives 'mahā' = 'great'. The following ས begins with ས and does not change this syllable's sound."
            },
            { tib: "ས", wylie: "sa", phon: "sa", note: "Root letter ས (sa) with inherent vowel 'a': 'sa'. Begins samaya, 'pledge'. The following མ begins with མ and does not change this syllable's sound." },
            { tib: "མ", wylie: "ma", phon: "ma", note: "Root letter མ (ma) with inherent vowel 'a': 'ma'. The following ཡ begins with ཡ and does not change this syllable's sound." },
            {
              tib: "ཡ",
              wylie: "ya",
              phon: "ya",
              note:
                "Root letter ཡ (ya) with inherent vowel 'a': 'ya'. Together ས་མ་ཡ = 'samaya'; with mahā- this gives 'mahāsamaya' = 'great pledge'. The following སཏྭ begins with ས and does not change this syllable's sound."
            },
            {
              tib: "སཏྭ",
              wylie: "sa twa",
              phon: "sato",
              note:
                "Root letter ས (sa) with ཏ (ta) and ཝ (wa) stacked beneath it, for the cluster 'ttva' of sattva, as in 'Vajrasattva' above. Together 'mahāsamaya-sattva' = 'great pledge-being', a closing epithet of Vajrasattva. The following ཨཱཿ begins with the vowel-carrier ཨ and does not change this syllable's sound."
            },
            {
              tib: "ཨཱཿ",
              wylie: "AH",
              phon: "ah",
              note:
                "The vowel-carrier letter ཨ (a-chung, used to write a vowel not following a consonant) with the long-vowel sign ཱ and the visarga ཿ — together 'āḥ', a closing seed syllable associated with speech (compare oṃ āḥ hūṃ in the Vajra Guru mantra), sealing the mantra. This is the final syllable of the entire hundred-syllable mantra, so there is no following syllable to affect it."
            }
          ]
        }
      ],
      wordGrouping:
        "Eighty-one Tibetan syllable-blocks group into the same nine word-units as the Sanskrit word list above: Om-Vajra-Sattva | Samaya-Manupalaya | Vajrasattva-tvenopatiṣṭha-dṛḍho-me-bhava | the three 'me bhava' requests (well-pleased, well-nourished, devoted) | grant-me-all-siddhis / make-my-mind-excellent-hūṃ | ha-ha-ha-ha-hoḥ | Bhagavan-Vajra-of-all-Tathāgatas | do-not-abandon-me | be-the-Vajra-holder-great-pledge-being-āḥ. In practice this mantra is chanted as one continuous flow without pauses between most of these units."
    }
  },

  {
    id: "yuthok-nyingthig-mantra",
    title: "Oṃ Āḥ Hūṃ Vajra Guru Yuthok Yönten Gönpo Siddhi Hūṃ",
    deity: "Yuthok Yönten Gönpo (father of Tibetan medicine, regarded as an emanation of Guru Padmasambhava)",
    tags: ["guru yoga", "Tibetan medicine", "Yuthok Nyingthig", "native Tibetan name"],
    sanskrit: null,
    tibetan: {
      script: "ཨོཾ་ཨཱཿཧཱུྂ་བཛྲ་གུ་རུ་གཡུ་ཐོག་ཡོན་ཏན་མགོན་པོ་སིདྡྷི་ཧཱུྂ།",
      wylie: "oM AH hU~M badz+ra gu ru g.yu thog yon tan mgon po sid+d+hi hU~M",
      phonetic: "Om Ah Hung Benza Guru Yutok Yönten Gönpo Siddhi Hung",
      translation:
        "Oṃ Āḥ Hūṃ — Vajra Guru Yuthok Yönten Gönpo — grant attainments (siddhi), Hūṃ! A guru-yoga mantra of the Yuthok Nyingthig tradition, invoking Yuthok Yönten Gönpo (the legendary founder of Tibetan medicine) as an emanation of Padmasambhava.",
      scriptType: "native-tibetan",
      intro:
        "This mantra is a hybrid: it opens and closes with the same Sanskrit-spelling blocks as the Vajra Guru mantra (Om Āḥ Hūṃ ... Siddhi Hūṃ), but its centre replaces 'Padma' with the genuinely Tibetan name of Yuthok Yönten Gönpo — 'Yuthok' ('Turquoise Roof', his family name) and 'Yönten Gönpo' ('Glorious/Lordly One of Good Qualities', part of his personal name). These middle syllables follow ordinary Tibetan reading rules (silent prefixes, vowel-fronting before certain suffixes), unlike the Sanskrit-spelling syllables around them.",
      words: [
        {
          script: "ཨོཾ་ཨཱཿཧཱུྂ",
          wylie: "oM AH hU~M",
          phon: "Om Ah Hung",
          gloss: "three seed syllables — body, speech, mind",
          syllables: [
            { tib: "ཨོཾ", wylie: "oM", phon: "Om", note: "The vowel-carrier letter ཨ (a-chung) with the vowel sign ོ (o) and the anusvāra ཾ (ṃ), spelling out oṃ syllable-by-syllable rather than with the single Oṃ ligature ༀ — both are read identically, representing the body aspect. The following ཨཱཿ begins with the same vowel-carrier ཨ and has no effect on this syllable's sound." },
            {
              tib: "ཨཱཿ",
              wylie: "AH",
              phon: "Ah",
              note:
                "The bare vowel-carrier letter ཨ (a) with the long-vowel sign ཱ (ā) and the visarga ཿ (two small circles stacked vertically), representing the Sanskrit final -ḥ — a light voiceless aspiration after the vowel. Together: 'āḥ', representing speech. The following ཧཱུྂ begins with ཧ and does not modify this syllable."
            },
            { tib: "ཧཱུྂ", wylie: "hU~M", phon: "Hung", note: "Root letter ཧ (ha) + long vowel sign ཱུ (ū) + anusvāra ྂ (ṃ) = 'hūṃ', representing mind, as in Om Mani Padme Hum. The following word begins with བཛྲ, which does not alter this syllable." }
          ]
        },
        {
          script: "བཛྲ་གུ་རུ",
          wylie: "badz+ra gu ru",
          phon: "Benza Guru",
          gloss: "Vajra Guru — 'the Vajra Master/Teacher'",
          syllables: [
            {
              tib: "བཛྲ",
              wylie: "badz ra",
              phon: "Benza",
              note:
                "Root letter བ (ba) with ཛ (ja/dza) and ྲ (ra) both subjoined, reproducing the Sanskrit consonant cluster 'vajra'. Tibetans pronounce ཛ like 'dz', so the cluster comes out as 'badza/benza' — the familiar Tibetanised 'Benza' for 'Vajra'. The following གུ begins with plain ག and does not change this syllable."
            },
            { tib: "གུ", wylie: "gu", phon: "gu", note: "ག (ga) + vowel sign ུ (u) = 'gu'. The following རུ begins with ར and has no effect here." },
            { tib: "རུ", wylie: "ru", phon: "ru", note: "ར (ra) + vowel sign ུ (u) = 'ru'. Together གུ་རུ = 'guru', 'teacher/master', so བཛྲ་གུ་རུ = 'Vajra Guru'. The following word གཡུ begins a genuinely Tibetan name and does not affect the sound of this syllable." }
          ]
        },
        {
          script: "གཡུ་ཐོག",
          wylie: "g.yu thog",
          phon: "Yutok",
          gloss: "Yuthok — 'Turquoise Roof' (the guru's family name)",
          syllables: [
            {
              tib: "གཡུ",
              wylie: "g.yu",
              phon: "yu",
              note:
                "A special combination letter: prefix ག written directly over the root letter ཡ (ya), with the vowel sign ུ (u). The prefix ག is silent in modern Central Tibetan pronunciation, but historically it marked this ཡ-syllable as belonging to a different register than a plain ཡ would have — in practice 'g.yu' is simply read 'yu'. Means 'turquoise', the precious stone for which this family/clan was named. The following ཐོག begins with ཐ and does not change this syllable's sound."
            },
            {
              tib: "ཐོག",
              wylie: "thog",
              phon: "tok",
              note:
                "Root letter ཐ (tha, an aspirate) with the vowel sign ོ (o) and the suffix letter ག (ga). Suffix ག, ད and བ are not released as full consonants in modern speech — they surface as an unreleased final stop, here giving a short final '-k', and they also shorten/clip the preceding vowel, so 'tho' + suffix ག is heard as 'tok' rather than 'thok'. Meaning 'roof'. Together གཡུ་ཐོག = 'Yutok', 'Turquoise Roof' — the family name of Yuthok Yönten Gönpo, the father of Tibetan medicine. This is the final syllable of the word; the following word ཡོན begins with ཡ and does not affect this syllable's sound."
            }
          ]
        },
        {
          script: "ཡོན་ཏན",
          wylie: "yon tan",
          phon: "Yönten",
          gloss: "yönten — 'good qualities, virtues' (part of the guru's personal name)",
          syllables: [
            {
              tib: "ཡོན",
              wylie: "yon",
              phon: "yön",
              note:
                "Root letter ཡ (ya) with the vowel sign ོ (o) and the suffix letter ན (na). The suffix ན is pronounced as a final '-n', but it also 'fronts' (umlauts) the preceding vowel: -o followed by suffix ན is regularly heard as '-ön' rather than plain '-on'. So ཡོན is pronounced 'yön', not 'yon'. The following ཏན begins with ཏ and does not change this syllable's sound."
            },
            {
              tib: "ཏན",
              wylie: "tan",
              phon: "ten",
              note:
                "Root letter ཏ (ta) with its inherent vowel 'a' and the suffix letter ན (na). As with the previous syllable, the suffix ན fronts the vowel: -a + suffix ན is regularly heard as '-en', so ཏན is pronounced 'ten', not 'tan'. Together ཡོན་ཏན = 'yönten', 'good qualities/virtues' — part of the guru's personal name, Yönten Gönpo ('Lord of Good Qualities'). The following word མགོན begins with the silent prefix མ and does not affect this syllable's own sound."
            }
          ]
        },
        {
          script: "མགོན་པོ",
          wylie: "mgon po",
          phon: "Gönpo",
          gloss: "gönpo — 'lord, protector' (part of the guru's personal name)",
          syllables: [
            {
              tib: "མགོན",
              wylie: "mgon",
              phon: "gön",
              note:
                "Root letter ག (ga) with the silent prefix letter མ (ma) written above it, the vowel sign ོ (o), and the suffix letter ན (na). The prefix མ is one of the five silent prefix consonants (ག ད བ མ འ) and is not pronounced, but — as with bla-ma above — it can shift the syllable's register; here it keeps the naturally high-register ག from shifting further. The suffix ན again fronts the vowel, so -o + ན is heard as '-ön': མགོན is pronounced 'gön'. The following པོ begins with པ and does not change this syllable's sound."
            },
            {
              tib: "པོ",
              wylie: "po",
              phon: "po",
              note:
                "Root letter པ (pa) with the vowel sign ོ (o), no prefix or suffix: 'po'. Together མགོན་པོ = 'gönpo', 'lord, protector' — a common honorific epithet (cf. Chenrezig Gönpo). Combined with the previous word, ཡོན་ཏན་མགོན་པོ = 'Yönten Gönpo', '(the) Lord of Good Qualities', the guru's personal name. This is the final syllable of the word; the following word སིདྡྷི begins a return to Sanskrit-spelling mode and does not affect this syllable's sound."
            }
          ]
        },
        {
          script: "སིདྡྷི",
          wylie: "sid+d+hi",
          phon: "Siddhi",
          gloss: "siddhi — accomplishment/attainment (the request: 'grant siddhi!')",
          syllables: [
            {
              tib: "སིདྡྷི",
              wylie: "sid+d+hi",
              phon: "Siddhi",
              note:
                "Root letter ས (sa) with vowel sign ི (i), carrying a stack of subjoined ད (da) and ྷ (the aspiration marker producing 'dha' — an aspirated sound foreign to native Tibetan), reproducing the Sanskrit cluster 'ddh' in siddhi. Read 'siddhi'. The closing ཧཱུྂ that follows begins with ཧ and does not change this syllable."
            }
          ]
        },
        {
          script: "ཧཱུྂ",
          wylie: "hU~M",
          phon: "Hung",
          gloss: "closing seed syllable (hūṃ)",
          syllables: [
            { tib: "ཧཱུྂ", wylie: "hU~M", phon: "Hung", note: "= 'hūṃ' again (root ཧ + long ū + anusvāra ṃ), closing the mantra. As the final syllable, there is no following syllable to affect it." }
          ]
        }
      ],
      wordGrouping:
        "Eleven Tibetan syllable-blocks group into seven units: Om | Ah | Hung (body–speech–mind, spelled out letter-by-letter rather than with the Oṃ ligature) | Benza-Guru ('Vajra Guru') | Yutok ('Turquoise Roof', the guru's family name) | Yönten-Gönpo ('Lord of Good Qualities', his personal name) | Siddhi-Hung ('grant attainments now'). The middle three words name Yuthok Yönten Gönpo directly, framed by the same opening/closing formula as the Vajra Guru mantra — reflecting his identity as an emanation of Padmasambhava."
    }
  },

  {
    id: "lama-khyen-no",
    title: "Lama Khyen-no (བླ་མ་མཁྱེན་ནོ།)",
    deity: "General devotional refrain addressed to one's Guru/Lama",
    tags: ["native Tibetan", "reading rules", "tone & silent letters"],
    sanskrit: null,
    tibetan: {
      script: "བླ་མ་མཁྱེན་ནོ།",
      wylie: "bla ma mkhyen no",
      phonetic: "La-ma khyen-no",
      translation:
        "\"Guru, think of me / know me (care for me)!\" — a very common devotional refrain, e.g. in the lines '...la-ma khyen-no, khyen-no, khyen-no' ('Guru, think of me, think of me, think of me').",
      scriptType: "native-tibetan",
      intro:
        "Unlike the mantras above, this phrase is genuinely Tibetan (not a Sanskrit transcription), so it is a good place to see the ordinary rules for Tibetan syllable structure: every syllable can have, in addition to a root letter and vowel sign, a prefix letter, superscript letter(s), subjoined letter(s), and a suffix (or even a second 'post-suffix') letter — and several of these are silent in modern speech while still shaping the tone and vowel quality of the syllable.",
      words: [
        {
          script: "བླ་མ",
          wylie: "bla ma",
          phon: "la-ma",
          gloss: "blama — 'guru/teacher' (lit. 'the higher one')",
          syllables: [
            {
              tib: "བླ",
              wylie: "bla",
              phon: "la (high tone)",
              note:
                "Structure: superscript བ (ba) over root letter ལ (la), inherent vowel 'a'. In modern Central Tibetan, a superscript ར, ལ or ས before certain root letters is not pronounced as a separate consonant — but it is NOT 'wasted': it shifts the syllable into HIGH register/tone. ལ on its own is one of the 'low' (voiced/resonant) consonants and would give a low-toned 'la'; with the silent superscript བ, བླ is pronounced 'la' but in a HIGH tone, audibly different from plain ལ. Lexically, 'bla' is an old word for 'soul/highest/upper', seen in bla-ma 'guru' (lit. 'the higher one'). The following syllable མ begins with a plain low-register consonant and does not change this syllable's tone or sound."
            },
            {
              tib: "མ",
              wylie: "ma",
              phon: "ma (low tone)",
              note:
                "Simple root letter མ with inherent vowel 'a' — no prefix, superscript, subjoined or suffix letters at all. མ is a nasal 'low'-register consonant, so this syllable is pronounced with low tone: 'ma'. Together བླ་མ = 'lama' (high-low), the familiar word for 'guru/teacher'. The following word མཁྱེན begins with a silent prefix མ and does not affect this syllable's own sound."
            }
          ]
        },
        {
          script: "མཁྱེན",
          wylie: "mkhyen",
          phon: "khyen (high tone)",
          gloss: "knows / thinks of / cares for (honorific verb)",
          syllables: [
            {
              tib: "མཁྱེན",
              wylie: "mkhyen",
              phon: "khyen (high tone)",
              note:
                "This syllable has four structural slots filled at once: (1) prefix letter མ (ma) — one of the five Tibetan prefix consonants (ག ད བ མ འ); prefixes are silent in modern pronunciation but they push the syllable into HIGH tone regardless of the root letter's own register; (2) root letter ཁ (kha), itself already a high-register consonant; (3) subjoined ྱ (ya-tags) under the root letter, which palatalises 'kha' to 'khya'; (4) vowel sign ེ (e), changing the inherent 'a' to 'e'; (5) suffix letter ན (na), which IS pronounced and closes the syllable with a final 'n'. Net result: silent-prefix(high tone) + khya + e + n = 'khyen', high tone. Meaning: the honorific verb root 'to know/think of/care for'. The following syllable ནོ begins with a plain low-register ན and does not change the sound of this syllable's final -n."
            }
          ]
        },
        {
          script: "ནོ",
          wylie: "no",
          phon: "no (low tone)",
          gloss: "[petitionary particle — 'please']",
          syllables: [
            {
              tib: "ནོ",
              wylie: "no",
              phon: "no (low tone)",
              note:
                "Root letter ན (na, a low-register nasal) with the vowel sign ོ (o), no prefix or suffix: 'no', low tone. Functions here as a sentence-final particle giving the verb an imperative/petitionary nuance — roughly 'please do (know me)!'. The final ། mark is simply Tibetan punctuation (a 'shad', equivalent to a full stop). This is the last syllable of the phrase, so there is no following syllable to affect it."
            }
          ]
        }
      ],
      wordGrouping:
        "Three words across four syllable-blocks: bla-ma ('guru', 2 syllables forming one compound noun) + mkhyen ('knows/cares for', 1 syllable, the verb) + no (1 syllable, a final particle). Sentence pattern: Subject (Guru) + Verb (think-of-me) + Particle (please) — 'Guru, [please] think of me!'. Contrast this with the Sanskrit mantras above: here every silent letter (the prefix མ, the superscript བ) is doing real grammatical/phonological work (raising tone), which is the system that does NOT apply when Tibetan letters are instead used to spell out Sanskrit."
    }
  }
];
