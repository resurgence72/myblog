
### 性能优化方法论

1. 确定问题：优化后能提升多少性能
2. 确定问题优先级：多个性能问题同时发生，先优化哪个
3. 确定优化方法：优化性能的方法有很多，确定哪一种


### 评估性能优化的效果

1. 确定性能量化指标
2. 测试优化前的性能指标
3. 测试优化后的性能指标


指标至少有两个纬度：
- 应用资源：通过吞吐量和请求延时来评估应用的性能
    + 评估性能优化的整体效果，因为系统优化总是为应用程序服务的
- 系统资源：CPU使用率
    + 影响应用程序性能的根源，所以需要用系统资源的指标来观察和分析瓶颈的来源

### CPU优化

应用程序优化：
- 编译器优化：编译器有提供对代码进行优化的（gcc 开启-O2）
- 算法优化:  O(logn)算法代替O(n^2)
- 异步处理：轮询改为事件通知
- 多线程代替多进程：降低切换上下文的次数


系统优化：
- CPU绑定：把进程绑定到一个或者多个CPU上，增加缓存命中率
- CPU独占：将CPU进行分组，并通过CPU的亲和性为其分配CPU，并且不允许其他进程抢占
- 优先级调整：调高进程优先级
- 为进程设置资源限制：防止由于某个应用自身而耗尽资源
- NUMA优化：支持 NUMA 的处理器会被划分为多个 node，每个 node 都有自己的本地内存空间。NUMA 优化，其实就是让 CPU 尽可能只访问本地内存。
- 中断负载均衡：软硬中断都会大量消耗CPU。开启 irqbalance 服务或者配置 smp_affinity，就可以把中断处理过程自动负载均衡到多个 CPU 上。

### 不要过早优化

“过早优化是万恶之源”

1. 优化带来的复杂度导致程序的可维护性降低
2. 需求在变化，针对当前场景的优化可能不适合以后了，


