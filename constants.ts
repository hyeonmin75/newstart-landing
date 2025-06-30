import { NavItem, StatItem, PartnerItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: '기금소개', href: 'https://www.realnewstart.ecnomini.com' },
  { name: '지원대상', href: 'https://www.realnewstart.ecnomini.com' },
  { name: '신청방법', href: 'https://www.realnewstart.ecnomini.com' },
  { name: '공지사항', href: 'https://www.realnewstart.ecnomini.com' },
  { name: '자주묻는질문', href: 'https://www.realnewstart.ecnomini.com' },
];

export const STATS_ITEMS: StatItem[] = [
  {
    value: 12,
    suffix: '조원',
    label: '총 지원 규모',
  },
  {
    value: 80,
    suffix: '만명',
    label: '누적 지원 인원',
  },
  {
    value: 90,
    suffix: '%',
    label: '최대 원금 감면율',
  },
];

export const PARTNER_ITEMS: PartnerItem[] = [
    { name: '금융위원회', logo: '금융위원회' },
    { name: '신용회복위원회', logo: '신용회복위원회' },
    { name: '캠코(한국자산관리공사)', logo: '캠코(한국자산관리공사)' },
    { name: '중소벤처기업부', logo: '중소벤처기업부' },
    { name: '소상공인시장진흥공단', logo: '소상공인시장진흥공단' },
];