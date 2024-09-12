---
title: How to Choose a Backend Programming Language
author: HiCheer
createTime: 2024/06/11 07:41:37
permalink: /en/article/4kvbxyr2/
---

## Foreword

As a programmer who switched to Java development after high school, I've been in the field for three years but still don't understand why there are so many programming languages and why certain languages are said to be easier or more suitable for specific fields. This article aims to help beginners with some basic programming knowledge by addressing some questions based on my own experiences and insights gathered from `personal reflection` and `ChatGPT`.

![image-20240611081410398](assets/image-20240611081410398.png)

## What are the Current Mainstream Backend Programming Languages and Their Suitable Fields?

> Let's start with the conclusions, then discuss the reasons.

#### 1. **Java**

- **Features**: Object-oriented, platform-independent (via JVM), strong type system, rich standard library, robust ecosystem (e.g., Spring framework)
- **Suitable** Fields: Enterprise applications, large systems, financial services, Android apps
- **Learning** Difficulty: Medium, requires understanding of object-oriented programming and JVM mechanisms

#### 2. **Python**

- **Features**: Simple and readable syntax, dynamic typing, rich standard library, powerful data processing and scientific computing libraries (e.g., Pandas, NumPy)
- **Suitable** Fields: Web development (e.g., Django, Flask), data science and machine learning (e.g., TensorFlow, scikit-learn), automation scripts
- **Learning** Difficulty: Low to medium, very suitable for beginners

#### 3. **JavaScript (Node.js)**

- **Features**: Single-threaded, non-blocking I/O, event-driven, cross-platform
- **Suitable** Fields: Web development, real-time applications (e.g., chat apps, real-time data streaming)
- **Learning** Difficulty: Low to medium, especially suitable for developers with front-end experience

#### 4. **Ruby (Ruby on Rails)**

- **Features**: Dynamic typing, object-oriented, elegant syntax, rapid development framework (Rails)
- **Suitable** Fields: Web development, startups, and MVP development
- **Learning** Difficulty: Low to medium, Rails simplifies web development significantly

#### 5. **PHP**

- **Features**: Dynamic typing, embedded in HTML, widely supported by web servers, rich web development libraries
- **Suitable** Fields: Web development, content management systems (e.g., WordPress, Drupal)
- **Learning** Difficulty: Low, particularly suitable for web development beginners

#### 6. **C#**

- **Features**: Object-oriented, strong type system, rich standard library, well-integrated with the Windows ecosystem (e.g., ASP.NET)
- **Suitable** Fields: Enterprise applications, Windows applications, game development (e.g., Unity engine)
- **Learning** Difficulty: Medium, requires understanding of .NET framework and object-oriented programming

#### 7. **Go (Golang)**

- **Features**: Statically typed, compiled language, built-in concurrency support (goroutines), simple syntax
- **Suitable** Fields: High-performance network services, distributed systems, cloud computing
- **Learning** Difficulty: Medium to high, requires understanding of concurrent programming

#### 8. **Scala**

- **Features**: Statically typed, runs on JVM, supports object-oriented and functional programming, strong concurrency support (e.g., Akka)
- **Suitable** Fields: Big data processing (e.g., Apache Spark), high concurrency systems
- **Learning** Difficulty: High, requires understanding of functional programming and JVM mechanisms

#### 9. **C**

- **Features**: Low-level language, manual memory management, direct hardware access, efficient performance
- **Suitable** Fields: System programming, embedded systems, operating systems, low-level library development
- **Learning** Difficulty: High, requires understanding of pointers and manual memory management

#### 10. **C++**

- ** Features**: Object-oriented, supports generic programming, manual memory management, efficient performance, Standard Template Library (STL)
- **Suitable** Fields: Game development, system programming, high-performance applications, graphics processing
- **Learning** Difficulty: High, requires understanding of complex syntax and memory management

## Why?

### - Why Choose a Language Based on the Business Domain?

> When starting out, you might hear that a certain language is suitable for developing in a specific domain. Why is that?
>
> Remember: scenarios come first, languages come later. In other words, needs arise before solutions.
> 
> This explains why you should choose a language based on the business domain.

1. **Performance and Scalability Requirements**:

    Some business domains may require high-performance and scalable solutions. In such cases, selecting a high-performance programming language like C++ or Go might be more appropriate.

2. **Ecosystem and Library Support**:

    Different programming languages have different ecosystems and library support. Some business domains may need specific libraries or frameworks to simplify the development process. Choosing a language with a rich ecosystem can be more suitable.

3. **Development Efficiency and Rapid Iteration**:

    For business domains that require rapid iteration and development efficiency, selecting a language with concise syntax and rich library support like Python or Ruby might be more appropriate.

4. **Security and Stability**:

    Some business domains have high requirements for security and stability. In such cases, selecting widely tested and validated languages like Java or C# might be more suitable.

5. **Concurrency and Distributed Systems Requirements**:

    For business domains that need to handle a large number of concurrent requests or build distributed systems, selecting a language with good concurrency support like Erlang or Go might be more appropriate.

6. **Team Skills and Experience**:

    Lastly, when choosing a programming language for a business domain, it is important to consider the skills and experience of the team members. Choosing a language familiar to the team can improve development efficiency and quality.

### - Why is it said that this language is well-optimized for that business scenario?

> How do these languages possess these features, and how can we prove these features truly exist, as well as identify their limitations?
>
> For example: I've heard that the Go language inherently supports high concurrency. How can we prove that its concurrency is better than other languages?
> 
> Actually, there are some testing organizations that evaluate these features of programming languages to verify if they truly possess the features they claim. For example, TechEmpower <a herf='https://www.catchpoint.com/'>TechEmpower Web Framework Benchmarks</a> can be used to measure database performance, JSON serialization, and other metrics. There are many such resources, and you can search for more yourself.

In this context, it means that the language has been optimized in specific code areas. If you need detailed understanding, it's what we often refer to as "have you read the `source code`?" You should look at others' code and understand their logic.

#### Additionally

Being able to write good code and understand others' code is crucial. This process, often referred to as code `review`, improves your ability to comprehend code, regardless of its quality. 

Our predecessors often emphasized this, and while I didn't understand it back then, I'm beginning to grasp it now. I hope you can too.

---
### - How to verify that a language is significantly optimized for a particular business scenario?

> Evaluation and Testing

1. **Performance Testing**:

   Use performance testing tools or write your own performance testing code to evaluate the performance of the language in specific business scenarios. Focus on metrics such as response time, throughput, and memory usage, and compare these with other languages.

2. **Concurrency Testing**:

   If the business scenario requires handling a large number of concurrent requests or building a highly concurrent system, conduct concurrency testing to evaluate the language's concurrency handling capabilities. Focus on metrics such as concurrent performance and resource management.

3. **Stress Testing**:

   Perform stress testing to evaluate the language's performance under increased load. Simulate business scenarios under high load to assess system stability and performance.

4. **Real-world Application Evaluation**:

   Apply the language in actual business scenarios and monitor system performance, collecting data for evaluation. Focus on metrics such as system stability, maintainability, and development efficiency.

5. **Case Studies and Experience Sharing**:

   Refer to other companies or projects that have successfully used the language in similar business scenarios. Learn from their experiences and compare them with your own situation for evaluation.

6. **Expert Opinions and Technical Reviews**:

   Seek opinions from experts or technical teams in relevant fields. Conduct technical reviews to evaluate whether the language is suitable for specific business scenarios and to understand possible optimization strategies.

---
### - Why can't one language excel in all aspects?

> The creation of a language is based on the needs and context at the time. No one can predict the future, so as we mentioned earlier, the solution comes after the need. 
> 
> The authors of a language certainly strive to make it as extensible as possible.

1. **Different Design Goals**:

   Different programming languages may pursue different design goals. For example, some languages may focus more on development efficiency and ease of use, while others may emphasize performance and scalability. Thus, their optimizations in specific areas will vary.

2. **Adaptation to Domain Needs**:

   Some programming languages may be better suited to handle specific domain requirements and thus will have specialized optimizations in those areas. For example, Python is widely used in scientific computing and data analysis, so it is optimized for handling large datasets and scientific calculations.

3. **Language Features and Ecosystem**:

   Each programming language has unique features and ecosystems that influence its optimization in specific domains. For instance, Go has excellent concurrency support, making it particularly optimized for building highly concurrent systems.

4. **Developer Community and Practical Experience**:

   Different programming languages have diverse developer communities and practical experiences that impact their optimization in specific areas. For example, the Ruby on Rails framework has rich practical experience and optimization techniques in web development.

---
### - Why are some languages phased out?

> I believe it's due to not adapting to societal and technological changes or the decline of industry demand. If a language itself fails to evolve, developers will have better options.

1. **Technological Obsolescence**:

   Some programming languages might have been designed with outdated technologies or concepts, making them unable to keep up with technological advancements. These languages may lack modern features and functions, making them unsuitable for current development needs.

2. **Ecosystem Decline**:

   The ecosystem of a programming language is crucial for its long-term development. If a language's ecosystem declines, lacking new libraries, frameworks, and tools, developers may switch to more vibrant languages.

3. **Performance Issues**:

   Some programming languages may have performance issues, making them unsuitable for certain application scenarios. If a language's performance cannot meet modern application demands, developers might choose more efficient alternatives.

4. **Security Issues**:

   Security is a significant consideration in programming languages. If a language has severe security vulnerabilities or is easily compromised, developers may switch to more secure alternatives.

5. **Lack of Community Support and Updates**:

   The long-term development of a language requires an active developer community and continuous updates and maintenance. If a language lacks sufficient community support or stagnates, it may be phased out.

6. **Technological Replacement**:

   Sometimes, a programming language is replaced by more advanced languages that better suit current technological trends. New languages may offer more modern features and more efficient development tools, attracting developers away from older languages.

7. **Market Demand Changes**:

   Finally, changes in market demand may lead to the phasing out of some programming languages. If a language cannot meet current market needs, developers might choose alternatives that better fit market demands.

---
### - How should a developer choose a language?

> Factors such as `interest`, `employment`, `income`, and `difficulty level` come into play.

1. **Project Requirements**:

   First, consider the project's needs, including project type, scale, expected user volume, and functional requirements. Different projects may require different programming languages, so choose the appropriate language based on project needs.

2. **Personal Interest and Skills**:

   Personal interest and skills are also important factors in choosing a programming language. Choosing a language you enjoy and are proficient in can enhance learning and development efficiency and better adapt to project needs.

3. **Ecosystem and Support**:

   The ecosystem and support of a programming language are also critical considerations. A mature, active ecosystem can provide rich libraries, frameworks, and tools to accelerate the development process. Community support and documentation resources are also important factors.

4. **Job Market and Trends**:

   Considering the job market, look at the demand and trends for different programming languages. Choosing a language with high demand can help enhance job competitiveness.

5. **Learning Difficulty**:

   Lastly, consider the learning difficulty of the programming language. Some languages are easier to learn, suitable for beginners, while others are more complex and require more time and effort to master. Choose a language based on your learning capacity and time availability.

---
### - Do you need to change languages when switching fields?

> It depends on your background. Any language can be used, but you need to weigh `the cost of learning a new language` against `the development efficiency of the old one`. Usually, if the efficiency is comparable, new languages are not learned. However, most languages are not difficult to learn if you have already mastered one. After all, the language designers aim to make languages `easy and quick` to learn.

1. **Domain Characteristics**:

   Different domains may have different needs and characteristics. If the new domain requires the specific features or libraries of a certain language, you might need to switch to that language.

2. **Adaptation of Technology Stack**:

   If the new domain's technology stack is incompatible with or unsuitable for the current language, you might need to switch to a more appropriate language. For example, if moving from front-end development to data science, learning a data science language like Python might be necessary.

3. **Team Skills**:

   Consider the overall skills and experience of the team. If team members are unfamiliar with the language used in the new domain, training or switching to a familiar language might be necessary.

4. **Project Requirements**:

   Most importantly, consider the specific needs of the project. If the current language meets project requirements and switching languages would incur significant costs and risks, changing languages might not be necessary.

5. **Time and Resource Investment**:

   Switching to a new language requires time and resources for learning and adaptation. If time is tight or resources are limited, weigh whether it's worth switching languages.

---
### - Development direction of languages

> `Simplicity`, `security`, and `comprehensiveness are ideal` but challenging to achieve fully.

1. **Simplicity and Ease of Use**:

   Many languages aim for simple and easy-to-use syntax and features to improve development efficiency and code readability. This means avoiding redundancy and complexity, providing clear and concise syntax, and consistent programming models.

2. **Performance and Efficiency**:

   Many languages strive to provide high performance and efficiency to meet performance needs. This may involve optimizing for low-level hardware, supporting concurrency and parallel processing, and optimizing memory management and resource utilization.

3. **Security and Stability**:

   Security and stability are crucial goals for programming languages. Languages should provide strong type checking, memory safety, exception handling mechanisms, and more to prevent vulnerabilities and errors, ensuring system stability and reliability.

4. **Flexibility and Extensibility**:

   Some languages aim to provide flexibility and extensibility to meet the needs of different domains and applications. This may include supporting multi-paradigm programming, metaprogramming, dynamic language features, and providing rich library and framework support.

5. **Community Involvement and Openness**:

   Many languages encourage community involvement and open development processes to foster innovation and collaboration. This may include adopting open-source development models, providing open design and specifications, and actively responding to community feedback.

6. **Cross-Platform and Cross-Device Support**:

   With the rise of mobile internet and IoT, more languages aim to provide cross-platform and cross-device support to meet application needs on different platforms and devices.
