import {useMemo} from 'react'

export const useRandomColors = (newsLength: number) => {
  return useMemo(() => {
    const colors = ['#115A46', '#3F0839', '#006162', '#906811', '#800']
    const result: string[] = []
    const cols = 4

    for (let i = 0; i < newsLength; i++) {
      const row = Math.floor(i / cols)

      const prevColor = i > 0 ? result[i - 1] : null

      const topColor = row > 0 ? result[i - cols] : null

      const availableColors = colors.filter(
        (color) => color !== prevColor && color !== topColor,
      )

      const selectedColor =
        availableColors.length > 0
          ? availableColors[Math.floor(Math.random() * availableColors.length)]
          : colors[0]

      result.push(selectedColor)
    }

    return result
  }, [newsLength])
}
