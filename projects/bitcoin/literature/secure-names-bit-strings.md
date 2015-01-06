---
layout: base
title: Secure Names for Bit-Strings
---

## Secure Names for Bit-Strings
Stuart Haber and W. Scott Stornetta ([original](secure-names-bit-strings.pdf))

### Abstract
The increasing use of digital documents, and the need to refer to them conveniently and unambiguously, raise an important question: can one "name" a digital document in a way that conveniently enables users to find it, and at the same time enables a user in possession of a document to be sure that it is indeed the one that is referred to by the name? One crucial piece of a complete solution to this problem would be a method that provides a cryptographically verifiable label for any bit-string (for example, the content, in a particular format, of the document). This problem has become even more acute with the emergence of the World-Wide Web, where a document (whose only existence may be on-line) is now typically named by giving its URL, which is merely a pointer to its virtual location at a particular moment in time.

Using a one-way hash function to call files by their hash values is cryptographically verifiable, but the resulting names are unwieldy, because of their length and randomness, and are not permanent, since as time goes on the hash function may become vulnerable to attack. We introduce procedures to create names that are short and meaningful, while at the same time they can persist indefinitely, independent of the longevity of any given hash function. This is done by naming a bit-string according to its position in a growing, directed acyclic graph of one-way hash values. We prove the security of our naming procedures under a reasonable complexity-theoretic cryptographic assumption, and then describe practical uses for these names. An implementation of our naming scheme has been in use since January 1995.

### 1. Introduction
Users of documents need to refer to those documents in order to keep records and in order to communicate with other users of the documents. In practice, users name their documents in various ways. A name must be unambiguous, at least in the context of its use; this requires some connection between the name and the integrity of the document it names.

In the traditional world of paper documents, there are usually reasonable guarantees of this connection. In the case of printed books and magazines, large print runs that are the result of single typesetting efforts make it easier to be confident that all copies of a printed document are the same with a definite name printed in a conventional place in the document. Making a change to a paper document of any sort, even a small change, typically leaves forensic evidence.

A characteristic feature of digital documents, by contrast, is that they are easy to copy and to alter. The naming problem is especially troubling if the document exists only on-line and never in conventional paper-based form. For on-line documents, a useful naming scheme would allow users to employ the name to _find_ documents, as well as to check the _integrity_ of the documents that they find. A number of proposals have been made for such naming systems (see e.g. [SM 94, KW 95, BD+ 95]). These proposals address in different ways the problem of how to "resolve" the name into a location where the document might be found.

It is the integrity-checking problem that we address in this work: how to make sure that the bit-string content of a given digital document is indeed the same as the bit-string that was intended. Heretofore, two different sorts of mechanisms have been proposed, digital signatures and one-way hash values.

Having the author or publisher of a document compute a digital signature for its bit-string content is a reasonable use of cryptographic tools for this purpose. (See, for example, [R 95, M 94].) However, the ability to validate many digital signatures requires the presence of a public-key infrastructure, and the trustworthiness of the validation procedure relies on the assurance that the signer's private signing key is indeed secure. For some on-line documents, the infrastructure and these assurances may not be available. For long-lived documents, the security of the binding between a public key and the person or role of the putative signer becomes even more problematic. (A general solution to the latter problem is briefly described in §5.)

Thus it would be useful to have an integrity mechanism, depending on the exact contents of the bit-string in question, that does not depend on the secrecy of a cryptographic key. A natural choice for such a mechanism is the use of a one-way hash function, naming any bit-string by its hash value. (See, for example, [BD+ 95].) However, while this method is intrinsicially verifiable, there are several inconvenient features:

- A desirable feature for the names given to a collection of objects is that they be long-lasting, if not permanent. (This is one of the functional requirements for URNs [SM 94].) But as technology advances, any particular choice of a presumably one-way function for a naming scheme becomes less secure, so that it must be replaced (see [Dob 96a, Dob 96b]). The unpleasant result is that the name of a long-lived document will need to change over time.
- Hash values are too long for a human user to remember or even to communicate easily to another human being. (For example, it is currently recommended that one-way hash functions compute outputs that are at the very least 128 bits long; this is the output length of MD5 [Riv 92]. In a 6 bit/character encoding, this is 22 alphanumeric characters long.)
- The author of a bit-string document has no control over the form of its name. A one-way hash function produces a random-appearing bit-string of the appropriate length as the hash value of a document. Thus, inconvenient as it may be for the author, there will be no connection between the names of documents that are related to each other, either in form or in substance.

This paper presents a method for naming bit-strings that retains the verifiable security of hash-based names, while avoiding the constraints listed above, as well as avoiding the use of secret cryptographic keys. The method is a variation on the digital time-stamping schemes of [HS 91, BHS 93]. In summary, the essence of the new scheme is to keep a repository of hash values that depends on many bit-string inputs, and to name each bit-string by a concise description of a location in the repository to which it can be securely "linked" by a one-way hashing computation.

An implementation of our naming scheme has been running continuously since January 1995 [Sur 95].

The rest of this paper is organized as follows. After technical preliminaries in §2, including both a brief discussion of the wider problem of naming digital documents as well as a formal description of our sub-problem, we present our scheme and prove its security in §3. Motivated by the explosive growth of the Internet, we mention a number of possible applications of our scheme in §4. In §5, we describe a method for extending the lifetime of our digital names beyond the cryptographically secure lifetime of the hash functions used to compute them. Finally, we discuss several different sorts of practical implementation in §6.

### 2. Preliminaries

#### 2.1 Naming digital documents
A naming system for digital documents should perform (at least) two functions. It should help the user (1) to find the document named; and (2) to reassure himself or herself that a given document is indeed the correct one, i.e., that it is indeed a perfect copy of the document that was intended.

To enable both these functions, the "name" could include both identification information as well as location information. System design may include procedures for registration of new documents, for finding a document given its name, for updating a document's location information, and for validating the integrity of a document. Typically, there is a server that "resolves" or translates a name into location information, for example into a URL or a list of URLs. The name may include other information about the document, including such data as title, author, format, price, and access priveleges.

A large body of work has been devoted to the difficult problem of designing and building a naming system of this sort so that it is usable, useful, and reliable. In [SM 94] a set of functional requirements is described for Uniform Resource Names (URNs), the names to be assigned by a naming system for resources on the Internet. A number of researchers have built naming systems, including, among others, [KW 95, BD+ 95]. (This is by no means an exhaustive list.)

In this work we propose a new method for the integrity-checking piece of naming systems for digital documents. All previously proposed systems that included mechanisms for checking the integrity of the bit-strings or bit-strings that make up a digital document have used either digital signatures or one-way hash functions for this purpose. For certain applications, these methods have the same problems described in §1 above.

#### 2.2 Hash functions
The principal technical tool we use in this paper is that of a one-way hash function. This is a function compressing digital documents of arbitrary length to bit-strings of a fixed length, for which it is computationally infeasible to find two different documents that are mapped by the function to the same _hash value_. (Such a pair is called a collision for the hash function.)