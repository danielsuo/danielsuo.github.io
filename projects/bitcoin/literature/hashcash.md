---
layout: base
title: Hashcash - A Denial of Service Counter-Measure
---

## Hashcash - A Denial of Service Counter-Measure
Adam Back ([original](hashcash.pdf))

### Abstract
_Hashcash_ was originally proposed as a mechanism to throttle systematic abuse of un-metered internet resources such as email, and anonymous remailers in May 1997. Five years on, this paper captures in one place the various applications, improvements suggested and related subsequent publications, and describes initial experience from experiments using hashcash.

The _hashcash_ CPU cost-function computes a token which can be used as a proof-of-work. Interactive and noninteractive variants of cost-functions can be constructed which can be used in situations where the server can issue a challenge (connection oriented interactive protocol), and where it can not (where the communication is store–and–forward, or packet oriented) respectively.

### 1. Introduction
Hashcash [1] was originally proposed as a mechanism to throttle systematic abuse of un-metered internet resources such as email, and anonymous remailers in May 1997. Five years on, this paper captures in one place the various applications, improvements suggested and related subsequent publications, and describes initial experience from experiments using hashcash.

The _hashcash_ CPU cost-function computes a token which can be used as a proof-of-work. Interactive and noninteractive variants of cost-functions can be constructed which can be used in situations where the server can issue a challenge (connection oriented interactive protocol), and where it can not (where the communication is store–and–forward, or packet oriented) respectively.

At the time of publication of [1] the author was not aware of the prior work by Dwork and Naor in [2] who proposed a CPU pricing function for the application of combatting junk email. Subsequently applications for cost functions have been further discussed by Juels and Brainard in [3]. Jakobsson and Juels propose a dual purpose for the work spent in a cost-function: to in addition perform an otherwise useful computation in [4].

### 2. Cost-Functions
A _cost-function_ should be efficiently verifiable, but parameterisably expensive to compute. We use the following notation to define a cost-function.

In the context of cost-functions we use client to refer to the user who must compute a token (denoted) using a cost-function $$\textrm{MINT}()$$ which is used to create tokens to participate in a protocol with a server. We use the term mint for the cost-function because of the analogy between creating cost tokens and minting physical money.

The server will check the value of the token using an evaluation function $$\textrm{VALUE}()$$, and only proceed with the protocol if the token has the required value.

The functions are parameterised by the amount of work ✁ that the user will have to expend on average to mint a token.

With interactive cost-functions, the server issues a challenge ✂ to the client – the server uses the CHAL ✄✆☎ function to compute the challenge. (The challenge function is also parameterised by the work factor.)