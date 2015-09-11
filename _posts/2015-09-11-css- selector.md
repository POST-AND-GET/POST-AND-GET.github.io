---
layout: post
title: "一个对css选择器有趣的解释"
category: css
tags: [css选择器]
---
今天搜索jquery选择器原理结果搜到了一个对css选择器中的空格;>;+;~的有意思解释，（其实还有一种关系：div.aaron，中间没有空格表示了选取一个class为aaron的div节点）

<!-- more -->

    <div id="grandfather">
      <div id="father">
        <div id="child1"></div>
        <div id="child2"></div>
        <div id="child3"></div>
      </div>
    </div>

- 爷爷grandfather与孙子child1属于祖宗与后代关系（空格表达）
- 父亲father与儿子child1属于父子关系，也算是祖先与后代关系（>表达）
- 哥哥child1与弟弟child2属于临近兄弟关系（+表达）
- 哥哥child1与弟弟child2,弟弟child3都属于普通兄弟关系（~表达）