import { isJson } from './json'

describe('json', () => {
  test('string', () => {
    expect(isJson('[{"name": 1}]')).toBe(true)
  })

  test('string - 2', () => {
    expect(isJson('[{"name": 1}, {"name": 2}, {"test": "name"}]')).toBe(true)
  })

  test('string - 3', () => {
    expect(isJson('{"name": 1, "test1": "name1", "test2": "name2"}')).toBe(true)
  })

  test('string - 4', () => {
    expect(
      isJson(
        '{"boolean_key":"--- true\\n","empty_string_translation":"","key_with_description":"Check it out! This key has a description! (At least in some formats)","key_with_line-break":"This translations contains\\na line-break.","nested":{"deeply":{"key":"Wow, this key is nested even deeper."},"key":"This key is nested inside a namespace."},"null_translation":null,"pluralized_key":{"one":"Only one pluralization found.","other":"Wow, you have %s pluralizations!","zero":"You have no pluralization."},"sample_collection":["first item","second item","third item"],"simple_key":"Just a simple key with a simple message.","unverified_key":"This translation is not yet verified and waits for it. (In some formats we also export this status)"}',
      ),
    ).toBe(true)
  })

  test('string - 5', () => {
    expect(
      isJson(
        '{"problems":[{"Diabetes":[{"medications":[{"medicationsClasses":[{"className":[{"associatedDrug":[{"name":"asprin","dose":"","strength":"500 mg"}],"associatedDrug#2":[{"name":"somethingElse","dose":"","strength":"500 mg"}]}],"className2":[{"associatedDrug":[{"name":"asprin","dose":"","strength":"500 mg"}],"associatedDrug#2":[{"name":"somethingElse","dose":"","strength":"500 mg"}]}]}]}],"labs":[{"missing_field":"missing_value"}]}],"Asthma":[{}]}]}',
      ),
    ).toBe(true)
  })

  test('reference (object)', () => {
    expect(isJson({ name: 1 })).toBe(true)
  })

  test('reference (object) - 2', () => {
    expect(isJson({ name: 1, value: 'name' })).toBe(true)
  })

  test('reference (array)', () => {
    expect(isJson([{ name: 1 }])).toBe(true)
  })

  test('reference (array) - 2', () => {
    expect(isJson([{ name: 1 }, { name: 2 }])).toBe(true)
  })

  test('reference (array) - 3', () => {
    expect(
      isJson([
        {
          layer: {
            'id': 'Nature Improvement Area',
            'minzoom': 7,
            'minzoom2': 7.9,
            'interactive': true,
            'paint': {
              'fill-opacity': 0.3,
              'fill-color': 'hsl(0, 24%, 24%)',
            },
            'type': 'fill',
            'source': 'mapbox://mbbdev.8uf2j3ka',
            'source-layer': 'lcr_nia_v1_region',
            'layout': {
              visibility: 'visible',
            },
          },
          type: 'Feature',
          geometry: null,
          properties: {
            NIA_Focu00: 'Netherley Brook and Ditton Brook Corridor',
            NIA_Focu01: 'INSERT LINK TO PROFILE DOC',
            NIA_Focus_: '07',
          },
          id: 16,
        },
        {
          layer: {
            'id': 'Liverpool City Region',
            'minzoom': 6,
            'interactive': true,
            'paint': {
              'fill-opacity': 0.2,
              'fill-antialias': true,
              'fill-color': 'hsl(0, 4%, 40%)',
            },
            'type': 'fill',
            'source': 'mapbox://mbbdev.67id5f6x',
            'source-layer': 'lcr_district_boundary_region',
            'filter': ['==', '$type', 'Polygon'],
          },
          type: 'Feature',
          geometry: null,
          properties: {
            AREA_HA: 8618.7,
            NAME: 'Knowsley',
          },
          id: 1,
        },
      ]),
    ).toBe(true)
  })
})
