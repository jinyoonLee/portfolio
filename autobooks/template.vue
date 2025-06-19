<template>
  <div class="overflow-auto" style="height: calc(100vh - 360px);">
    <template v-for="(item, i) in sideMenu">
      <!-- sideMenu변수 없다면 그냥 sideMenuList에서 바로 받을수 있기때문에 in sideMenuList로 -->
      <div class="flex flex-col mb-4">
        <div :class="i == 0 ? 'font-13 text-silver pl-6 pt-3 pb-2.5' : 'font-13 text-silver mx-6 mt-0.5 pt-5 pb-3 line-top'"
          v-if="asideStore.visible && item.list.length > 0">{{ item.label }}</div>
        <template v-for="(subItem, j) in item.list">
          <ButtonAsideNav @click="navigateTo(subItem.path)" :label="asideStore.visible ? subItem.label : undefined"
            :icon="subItem.icon" :isActive="route.path === subItem.path" />
        </template>
      </div>
    </template>
    <!-- 원래코드 -->
    <div class="flex flex-col mb-4">
      <div class="font-13 text-silver pl-6 pt-3 pb-2.5" v-if="asideStore.visible">고객관리</div>
      <ButtonAsideNav 
        @click="navigateTo('/regist/list')" 
        :label="asideStore.visible ? '발주 관리' : undefined" 
        icon="mdi:card-account-phone-outline"
        :isActive="route.path === '/regist/list'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/company/list')" 
        :label="asideStore.visible ? '고객 관리' : undefined" 
        icon="mdi:home-city-outline" 
        :isActive="route.path === '/company/list'"
      />
    </div>

    <div class="flex flex-col mb-4">
      <div class="font-13 text-silver mx-6 mt-0.5 pt-5 pb-3 line-top" v-if="asideStore.visible">영업관리</div>
      <ButtonAsideNav 
        @click="navigateTo('/marketing/manage')" 
        :label="asideStore.visible ? '영업관리' : undefined" 
        icon="mdi:account-details"
        :isActive="route.path === '/marketing/manage'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/marketing/call')" 
        :label="asideStore.visible ? '마케팅관리' : undefined" 
        icon="mdi:phone"
        :isActive="route.path === '/marketing/call'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/marketing/visit')" 
        :label="asideStore.visible ? '상담관리' : undefined" 
        icon="mdi:account-voice"
        :isActive="route.path === '/marketing/visit'"
      />
    </div>

    <div class="flex flex-col mb-4">
      <div class="font-13 text-silver mx-6 mt-0.5 pt-5 pb-3 line-top" v-if="asideStore.visible">통계/집계</div>
      <ButtonAsideNav 
        @click="navigateTo('/statistics/request_list')" 
        :label="asideStore.visible ? '스크래핑 내역' : undefined" 
        icon="mdi:bank"
        :isActive="route.path === '/statistics/request_list'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/statistics/scrapping')" 
        :label="asideStore.visible ? '스크래핑 집계' : undefined" 
        icon="mdi:database-import-outline"
        :isActive="route.path === '/statistics/scrapping'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/statistics/statement')" 
        :label="asideStore.visible ? '전표 집계' : undefined" 
        icon="mdi:receipt-text-outline"
        :isActive="route.path === '/statistics/statement'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/statistics/statement')" 
        :label="asideStore.visible ? '영업 집계' : undefined" 
        icon="mdi:chart-line"
        :isActive="route.path === '/statistics/statement'"
      />
    </div>

    <div class="flex flex-col mb-4">
      <div class="font-13 text-silver mx-6 mt-0.5 pt-5 pb-3 line-top" v-if="asideStore.visible">환경설정</div>
      <ButtonAsideNav 
        @click="navigateTo('/settings/scrapping')" 
        :label="asideStore.visible ? '스크래핑 환경설정' : undefined" 
        icon="mdi:cog-outline"
        :isActive="route.path === '/settings/scrapping'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/settings/abstract_account')" 
        :label="asideStore.visible ? '거래적요 관리' : undefined" 
        icon="mdi:book-open-blank-variant-outline"
        :isActive="route.path === '/settings/abstract_account'"
      />
      <ButtonAsideNav 
        @click="navigateTo('/settings/user_list')" 
        :label="asideStore.visible ? '사용자 관리' : undefined" 
        icon="mdi:account-multiple"
        :isActive="route.path === '/settings/user_list'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//버튼관련추가
import { ButtonAsideNav } from '#components'
import { useRoute } from 'vue-router'
const route = useRoute()

//템플릿리스트
const sideMenuList = [
  {
    label: '고객 관리',
    list: [
      {
        label: '발주 관리',
        icon: 'mdi:card-account-phone-outline',
        path: '/regist/list',
        role: ['ADMIN', 'MONEYTAX', 'ACCOUNTANT']
      },
      {
        label: '고객 관리',
        icon: 'mdi:home-city-outline',
        path: '/company/list',
        role: ['ADMIN', 'MONEYTAX', 'MANAGER', 'TELEMARKET']
      }
    ],
  },
  {
    label: '세무 관리',
    list: [
      {
        label: '스크래핑 내역',
        icon: 'mdi:receipt-text-arrow-left-outline',
        path: '/scrapping/request_list',
        role: ['ADMIN', 'MONEYTAX', 'ACCOUNTANT']
      },
      {
        label: '홈텍스 세금 신고서',
        icon: 'mdi:file-document-multiple-outline',
        path: '/',
        role: ['ADMIN', 'MONEYTAX', 'ACCOUNTANT']
      },
      {
        label: '스크래핑 환경설정',
        icon: 'mdi:checkbox-marked-circle-outline',
        path: '/scrapping/config',
        role: ['ADMIN']
      },
    ],
  },
  {
    label: "영업 관리",
    list: [
      {
        label: '영업 관리',
        icon: 'mdi:account-details',
        path: '/marketing/manage',
        role: ['ADMIN', 'MONEYTAX', 'MANAGER']
      },
      {
        label: "텔레마케팅 관리",
        icon: 'mdi:phone',
        path: '/marketing/call',
        role: ['ADMIN', 'MONEYTAX', 'MANAGER', 'TELEMARKET']
      },
      {
        label: "상담방문 관리",
        icon: 'mdi:account-voice',
        path: '/marketing/visit',
        role: ['ADMIN', 'MONEYTAX', 'MANAGER']
      },
      {
        label: "영업, 마케팅 조직 관리",
        icon: 'mdi:account-multiple',
        path: '',
        role: ['ADMIN', 'MONEYTAX', 'MANAGER']
      },
    ],
  },
  {
    label: '통계 및 집계',
    list: [
      {
        label: "스크래핑 집계",
        icon: 'mdi:database-import-outline',
        path: '/statistics/scrapping',
        role: ['ADMIN']
      },
      {
        label: "전표 집계",
        icon: 'mdi:receipt-text-outline',
        path: '/statistics/statement',
        role: ['ADMIN']
      },
      {
        label: "영업 집계",
        icon: 'mdi:chart-line',
        path: '/statistics/business',
        role: ['ADMIN', 'MONEYTAX', 'MANAGER', 'TELEMARKET']
      },
    ]
  }
]

//role아니면 변수 필요없음!
const sideMenu = (() => {
  let result = []
  for (const item of sideMenuList) {
    let newObj = { label: item.label, list: [] as any }
    for (const subItem of item.list) {
      if (subItem.role.includes(authStore.userInfo.userType)) {
        newObj.list.push(subItem)
      }
    }
    result.push(newObj)
  }
  return result
})()
</script>