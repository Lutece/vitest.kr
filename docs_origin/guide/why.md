---
title: Why Vitest | Guide
---

# 왜 Vitest일까요?
:::tip NOTE
이 가이드는 Vite를 사용하는 것이 능숙하다는 가정 하에 작성되었습니다.
학습 하기에 더 좋은 방법은 [Why Vite Guide](https://vitejs.dev/guide/why.html)를 읽고 Evan You가 주요 컨셉들을 설명하는 데모 영상인 [ViteJS와 함께 하는 차세대 프론트엔드 툴링](https://www.youtube.com/watch?v=UJypSr8IhKY)을 보는 것입니다.
:::


## Vite 네이티브 테스트 러너의 필요성

Vite는 일반적인 웹 패턴, glob imports와 SSR primitive와 같은 기능, 다수의 플러그인 및 통합을 즉시 지원하여 활발한 생태계를 조성하고 있습니다. Vite의 개발 및 빌드 스토리가 성공의 핵심입니다. 문서의 경우, Vite로 구동되는 몇 가지 SSG 기반 대안들이 있습니다. Vite의 단위 테스트 스토리는 명확하지는 않습니다. [Jest](https://jestjs.io/)와 같이 기존 옵션들은 다른 맥락안에서 만들어 졌습니다. Jest와 Vite 사이에는 많은 중복이 있어 사용자가 두 개의 다른 파이프라인을 구성해야 합니다.

테스트 동안 파일을 변환하기 위해 Vite 개발 서버를 사용하면, 소스 파일 변환의 복잡성을 다룰 필요가 없는 단순한 러너의 생성이 가능하고, 테스트 중에 최고의 DX를 제공하는데에만 집중할 수 있습니다. 테스트 러너는 앱의 동일한 구성을 사용하여 (`vite.config.js`를 통해) 개발, 빌드 및 테스트 시간 동안 공통의 변환 파이프 라인을 공유합니다. 이는 동일한 플러그인 API로 확장할 수 있으며, 이를 통해 사용자와 사용자의 도구 관리자가 Vite와 함께 최고 수준의 통합을 제공할 수 있습니다. 즉각적인 핫 모듈 리로드(HMR)와 같은 DX 개선사항의 이점만을 취하여, 처음부터 Vite를 염두에 두고 빌드된 툴입니다. 이것이 Vite로 구동되는 초고속 유닛 테스트 프레임워크인 Vitest입니다.

Jest의 대규모 채택을 고려할 때, Vitest는 대부분의 프로젝트에서 drop-in 대체재로 사용할 수 있는 호환 가능한 API를 제공합니다. 또한 단위 테스트를 설정할 때 필요한 가장 일반적인 기능(모킹, 스냅샷, 커버리지)도 포함되어 있습니다. Vitest는 성능에 많은 신경을 쓰며 가능한 한 많은 워커 스레드를 병렬로 실행합니다. 일부 포트에서는 테스트 실행 속도가 훨씬 빨라졌습니다. Watch 모드가 기본적으로 사용되며, 이는 개발자 우선 경험을 추구하는 Vite의 방향과 일치합니다. 이러한 DX의 모든 개선에도 Vitest는 종속성을 신중하게 선택하여 (또는 필요한 부분을 직접 인라이닝 하여) 가벼운 무게를 유지합니다.

**Vitest는 Vite 프로젝트를 위한 테스트 러너로서, 그리고 Vite를 사용하지 않는 프로젝트에서도 견고한 대안으로써 위치하는 것을 목표하고 있습니다.**

[Getting Started Guide](https://lutece.github.io/vitest.kr/guide/)에서 계속 읽기


## Vitest는 X와 어떻게 다른가요?

Vitest가 다른 유사한 도구와 어떻게 다른지 자세히 알아보려면 [Comparisons](https://lutece.github.io/vitest.kr/guide/comparisons.html) 섹션을 확인하세요.