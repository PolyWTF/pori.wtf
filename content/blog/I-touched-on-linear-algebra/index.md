---
title: 線形代数に触れてみた
date: 2020-08-08 11:39:54
description: ガチで触りだけ
---

## スカラー
$1, 4, 1.2, -7$のような普通の数値

Pythonで扱われる通常の数値はスカラーに対応している

```python
a = 1
b = 1.2
c = 0.25
d = 1.2e5
```

## ベクトル
スカラーを直線状に並べたもの

$$
\begin{aligned}
\vec{a} & = \left(
    \begin{array}{c}
      1 \\
      2 \\
      3
    \end{array}
 \right) \\
 \vec{b} & = (-2.3, 0.25, -1.2, 1.8, 0.41) \\
 \vec{p} & = \left(
    \begin{array}{c}
      p_1 \\
      p_2 \\
      \vdots \\
      p_m
    \end{array}
 \right) \\
\vec{q} & = (q_1, q_2, \cdots, q_n)
\end{aligned}
$$
$\vec{a}$と$\vec{p}$は縦ベクトルと呼ばれ、  
$\vec{b}$と$\vec{q}$は横ベクトルと呼ばれる

numpyによる実装

```python
import numpy as np

a = np.array([1, 2, 3])

b = np.array([-2.3, 0.25, -1.2, 1.8, 0.41])
```

## 行列
スカラーを格子状に並べたもの

$$
\left(
    \begin{array}{cccc}
      0.12 & -0.34 & 1.3 & 0.81 \\
      -1.4 & 0.25 & 0.69 & -0.41 \\
      0.25 & -1.5 & -0.15 & 1.1 \\
    \end{array}
  \right)
$$
水平方向のスカラーの並びを「行」
垂直方向のスカラーの並びを「列」と呼ぶ

$$
A = \left(
    \begin{array}{cccc}
      0 & 1 & 2 \\
      3 & 4 & 5 \\
    \end{array}
  \right)
$$
行列$A$は2 * 3の行列

$$
P = \left(
    \begin{array}{cccc}
      p_{11} & p_{12} & \ldots & p_{1n} \\
      p_{21} & p_{22} & \ldots & p_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      p_{m1} & p_{m2} & \ldots & p_{mn} \\
    \end{array}
  \right) 
$$
行列$P$はn * mの行列

numpyによる実装  

```python
import numpy as np

a = np.array([[1, 2, 3],
              [4, 5, 6]])  # 2 * 3

b = np.array([[0.21, 0.14],
              [-1.3, 0.81],
              [0.12, -2.1]])  # 3 * 2
```

## 行列の積
前の行列の列の各要素と後の行列の例の各要素をかけ合わせた総和を新しい行列の要素とする

$$
   A = \left(
    \begin{array}{ccc}
      a_{11} & a_{12} & a_{13} \\
      a_{21} & a_{22} & a_{23} \\
    \end{array}
  \right)
$$ 

$$ 
   B = \left(
    \begin{array}{cc}
      b_{11} & b_{12} \\
      b_{21} & b_{22} \\
      b_{31} & b_{32} \\
    \end{array}
  \right)
$$ 

$A$は2 * 3、$B$は3 * 2の行列

$$ 
   AB = \left(
    \begin{array}{ccc}
      a_{11} & a_{12} & a_{13} \\
      a_{21} & a_{22} & a_{23} \\
    \end{array}
  \right) 
  \left(
    \begin{array}{cc}
      b_{11} & b_{12} \\
      b_{21} & b_{22} \\
      b_{31} & b_{32} \\
    \end{array}
  \right) \\
 = \left(
    \begin{array}{ccc}
      a_{11}b_{11}+a_{12}b_{21}+a_{13}b_{31} & a_{11}b_{12}+a_{12}b_{22}+a_{13}b_{32} \\
      a_{21}b_{11}+a_{22}b_{21}+a_{23}b_{31} & a_{21}b_{12}+a_{22}b_{22}+a_{23}b_{32} \\
    \end{array}
  \right) \\
 = \left(
    \begin{array}{ccc}
      \sum\limits_{k=1}^3 a_{1k}b_{k1} & \sum\limits_{k=1}^3 a_{1k}b_{k2} \\
      \sum\limits_{k=1}^3 a_{2k}b_{k1} & \sum\limits_{k=1}^3 a_{2k}b_{k2} \\
    \end{array}
  \right)
$$

行列積を計算するためには前の行列の列数と後ろの行列の列数が一致していなければならない

行列積は総和を使って記述できる

$$
\begin{aligned} \\
AB & = \left(
    \begin{array}{cc}
      a_{11} & a_{12} & \ldots & a_{1m} \\
      a_{21} & a_{22} & \ldots & a_{2m} \\
      \vdots & \vdots & \ddots & \vdots \\
      a_{l1} & a_{l2} & \ldots & a_{lm} \\
    \end{array}
  \right)
\left(
    \begin{array}{cccc}
      b_{11} & b_{12} & \ldots & b_{1n} \\
      b_{21} & b_{22} & \ldots & b_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      b_{m1} & b_{m2} & \ldots & b_{mn} \\
    \end{array}
  \right) \\
  & = \left(
    \begin{array}{cccc}
      \sum\limits_{k=1}^m a_{1k}b_{k1} & \sum\limits_{k=1}^m a_{1k}b_{k2} & \ldots & \sum\limits_{k=1}^m a_{1k}b_{kn} \\
       \sum\limits_{k=1}^m a_{2k}b_{k1} & \sum\limits_{k=1}^m a_{2k}b_{k2} & \ldots & \sum\limits_{k=1}^m a_{2k}b_{kn} \\
      \vdots & \vdots & \ddots & \vdots \\
      \sum\limits_{k=1}^m a_{lk}b_{k1} & \sum\limits_{k=1}^m a_{lk}b_{k2} & \ldots & \sum\limits_{k=1}^m a_{lk}b_{kn} \\
    \end{array}
  \right)
  \end{aligned}
$$

numpyによる実装

```python
import numpy as np

a = np.array([[0, 1, 2],
              [1, 2, 3]]) 
b = np.array([[2, 1],
              [2, 1],
              [2, 1]]) 
print(np.dot(a, b))
###
[[ 6  3]
 [12  6]]
###
```

## 要素ごとの積(アダマール積)
行列の各要素をかけ合わせる

$$
\begin{aligned} \\
   A & = \left(
    \begin{array}{cccc}
      a_{11} & a_{12} & \ldots & a_{1n} \\
      a_{21} & a_{22} & \ldots & a_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      a_{m1} & a_{m2} & \ldots & a_{mn}
    \end{array}
  \right) \\
   B & = \left(
    \begin{array}{cccc}
      b_{11} & b_{12} & \ldots & b_{1n} \\
      b_{21} & b_{22} & \ldots & b_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      b_{m1} & b_{m2} & \ldots & b_{mn}
    \end{array}
  \right)
\end{aligned}
$$

これらの積は$\circ$で表せる

$$
A\circ B = \left(
    \begin{array}{cccc}
      a_{11}b_{11} & a_{12}b_{12} & \ldots & a_{1n}b_{1n} \\
      a_{21}b_{21} & a_{22}b_{22} & \ldots & a_{2n}b_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      a_{m1}b_{m1} & a_{m2}b_{m2} & \ldots & a_{mn}b_{mn}
    \end{array}
  \right)
$$

numpyによる実装

```python
import numpy as np

a = np.array([[0, 1, 2],
              [3, 4, 5],
              [6, 7, 8]]) 
b = np.array([[0, 1, 2],
              [2, 0, 1],
              [1, 2, 0]]) 

print(a*b) #アスタリスクで実装できる
###
[[ 0  1  4]
 [ 6  0  5]
 [ 6 14  0]]
###
```
同じように要素ごとの和には+,差には-,割り算には/で計算可能

## 転置
行と列を入れ替える
転地された行列には$T$をつけて表す

$$  
\begin{aligned} \\
   A & = \left(
    \begin{array}{ccc}
      1 & 2 & 3 \\
      4 & 5 & 6 \\
    \end{array}
  \right) \\
   A^{\mathrm{T}} & = \left(
    \begin{array}{cc}
      1 & 4 \\
      2 & 5 \\
      3 & 6 \\
    \end{array}
  \right) \\
\end{aligned} 
$$ 

$$  
\begin{aligned} \\
   B & = \left(
    \begin{array}{cc}
      a & b \\
      c & d \\
      e & f \\
    \end{array}
  \right) \\
   B^{\mathrm{T}} & = \left(
    \begin{array}{ccc}
      a & c & e \\
      b & d & f \\
    \end{array}
  \right) \\
\end{aligned} 
$$ 

numpyによる実装

```python
import numpy as np

a = np.array([[1, 2, 3],
              [4, 5, 6]])
print(a.T)
###
[[1 4]
 [2 5]
 [3 6]]
###
```