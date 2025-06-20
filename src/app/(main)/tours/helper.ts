import {TourTaxonomy} from '@/types/tours.interface'

export function getSelectedOptionsFromParams({
  searchParams,
  tourLocationTax,
  tourDurationTax,
  tourBudgetTax,
}: {
  searchParams: URLSearchParams
  tourLocationTax: TourTaxonomy[]
  tourDurationTax: TourTaxonomy[]
  tourBudgetTax: TourTaxonomy[]
}) {
  const getSelected = (key: string, list: TourTaxonomy[]) => {
    const value = searchParams.get(key)
    if (!value) return []
    const slugs = value.split(',')
    return list.filter((item) => slugs.includes(item.slug))
  }

  return {
    selectedLocations: getSelected('location', tourLocationTax),
    selectedDurations: getSelected('duration', tourDurationTax),
    selectedBudgets: getSelected('orderby', tourBudgetTax),
  }
}
